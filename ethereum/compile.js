const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const diceGamePath = path.resolve(__dirname, 'contracts', 'diceGame.sol');
const source = fs.readFileSync(diceGamePath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'diceGame.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': [ '*' ],
      },
    },
  },
}

const output = JSON.parse(solc.compile(JSON.stringify(input)));
const contracts = output.contracts['diceGame.sol'];
// const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

const contract = contracts.DiceGame;
console.log(contract);
console.log(path.resolve(buildPath, 'DiceGame.json'));


fs.outputJsonSync(path.resolve(buildPath, 'DiceGame.json'), contract);


// for (let contractName in contracts) {
//   const contract = contracts[contractName];
//   fs.writeFileSync(path.resolve(buildPath, `${contractName}.json`), JSON.stringify(contract.abi, null, 2), 'utf8');
// }

// for (let contract in contracts) {
//   fs.outputJsonSync(
//     path.resolve(buildPath, contract.replace(':', '') + '.json'),
//     output[contract]
//   );
// }
