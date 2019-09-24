import Web3 from 'web3';
import DiceGame from './build/DiceGame.json';
// const HDWalletProvider = require('truffle-hdwallet-provider');

const provider = new Web3.providers.HttpProvider(
  'https://rinkeby.infura.io/v3/a8bc12d19ee2426eba8ab41aedce8f10'
);

// 'ride van lion tenant ivory diagram assume lazy tomato orphan proud oppose',
// 'https://rinkeby.infura.io/v3/a8bc12d19ee2426eba8ab41aedce8f10'

const web3 = new Web3(provider);

const instance = new web3.eth.Contract(
  DiceGame.abi,
  '0xB1a6A24Ea7427f3f09CBB43Fb3b5d3d9930d304D'
);

export default instance;