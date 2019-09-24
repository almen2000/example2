const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const DiceGame = require('./build/DiceGame.json');

const provider = new HDWalletProvider(
  'mnemonic',
  'https://rinkeby.infura.io/v3/*******'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(DiceGame.abi)
     .deploy({ data: '0x' + DiceGame.evm.bytecode.object }) // add 0x bytecode
     .send({ from: accounts[0] }); // remove 'gas'

  console.log('Contract deployed to', result.options.address);
};
deploy();
