import Web3 from 'web3';
import HDWalletProvider from 'truffle-hdwallet-provider';

const provider = new HDWalletProvider(
  'ride van lion tenant ivory diagram assume lazy tomato orphan proud oppose',
  'https://rinkeby.infura.io/v3/a8bc12d19ee2426eba8ab41aedce8f10'
);

const web3 = new Web3(provider);

export default web3;