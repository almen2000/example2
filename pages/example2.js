import Web3, { providers } from 'web3';

let provider = new providers.HttpProvider('https://rinkeby.infura.io/v3/a8bc12d19ee2426eba8ab41aedce8f10');

const web3 = new Web3(provider);

let privatKey = '0x0CDC9A772C15F9409B328B0119A5486D15F2312E65F28C387C4D9BEAF17AE674';
let managerAccount = web3.eth.accounts.privateKeyToAccount(privatKey);

const newGame = async () => {

}

const signAndSendTransaction = async (senderPrivateKey, to, encodeABI, gas) => {
    let pk = senderPrivateKey;
    if ('0x' !== pk.slice(0, 2)) {
            pk = '0x' + pk;
    }

    let acc = web3.eth.accounts.privateKeyToAccount(pk);
    
    const transaction = {
        from: acc.address,
        to: to,
        gas: gas,
        data: encodeABI
    }

    let signed = await web3.eth.accounts.signTransaction(transaction, pk);
    let trn = web3.eth.sendSignedTransaction(signed.rawTransaction);

    
}



