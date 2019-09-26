this.web3.setProvider(new this.web3.providers.HttpProvider(Config.infura));

router.post('/transfer-from/', awaitErorrHandlerFactory(async (req, res, next) => {
    try {
            objectValidation.validate(req.body, objectValidation.transferFrom);
            const { tokenAddress, from, to, amount, senderPrivateKey, gas, gasPrice } = req.body;
            let token = await utils.getContractByAddress(tokenAddress, 'BMPToken');
            const convertedAmount = utils.withoutDecimal(amount, await token.methods.decimals().call());
            const tr = token.methods.transferFrom(from, to, convertedAmount);
            const status = await utils.signAndSendTransaction(
                            senderPrivateKey, token._address, 0, tr.encodeABI(), gas, gasPrice);
            return res.status(200).json(status);
    } catch (error) {
            return res.status(400).json({ error: error.message });
    }
}));

async signAndSendTransaction(senderPrivateKey, to, amount, encodeABI, gas, gasPrice, nonce) {
    let pk = senderPrivateKey;
    if ('0x' !== pk.slice(0, 2)) {
            pk = '0x' + pk;
    }
    let acc = this.web3.eth.accounts.privateKeyToAccount(pk);
    if (! nonce) {
            const owner = this.web3.eth.accounts.privateKeyToAccount('0x' + senderPrivateKey).address;
            nonce = this.web3.eth.getTransactionCount(owner);
    }
    const tx = {
            from: acc.address,
            to: to,
            value: amount,
            gas: gas,
            gasPrice: gasPrice,
            nonce: nonce,
            data: encodeABI
    };
    let signed = await this.web3.eth.accounts.signTransaction(tx, pk);
    let trn = this.web3.eth.sendSignedTransaction(signed.rawTransaction);
    let self = this;
    return new Promise(function(resolve, reject) {
            trn.once('transactionHash', hash => {
                    trn.off('error');
                    resolve({ txHash: hash });
            });
            trn.once('error', error => {
                    reject(error);
            });
    });
}

static async signTransaction(senderPrivateKey, to, amount, encodeABI, gas, gasPrice, nonce) {
    let pk = senderPrivateKey;
    if ('0x' !== pk.slice(0, 2)) {
            pk = '0x' + pk;
    }
    let acc = this.web3.eth.accounts.privateKeyToAccount(pk);
    if (! nonce) {
            const owner = this.web3.eth.accounts.privateKeyToAccount('0x' + senderPrivateKey).address;
            nonce = this.web3.eth.getTransactionCount(owner);
    }
    const tx = {
            from: acc.address,
            to: to,
            value: amount,
            nonce: nonce,
            gas: gas,
            gasPrice: gasPrice,
            data: encodeABI
    };
    return await this.web3.eth.accounts.signTransaction(tx, pk);
}