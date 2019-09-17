const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledDiceGame = require('../ethereum/build/DiceGame.json');

let accounts;
let diceGame;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    diceGame = await new web3.eth.Contract(compiledDiceGame.abi)
                .deploy({ data: compiledDiceGame.evm.bytecode.object })
                .send({ from: accounts[0], gas: '3000000' });
});

describe('DiceGame', () => {
    it('deploys a diceGame', () => {
        assert.ok(diceGame.options.address);
    });

    it('marks caller as a manager', async () => {
        const manager = await diceGame.methods.manager().call();
        assert.equal(accounts[0], manager);
    });

    it ('game id is 0', async () => {
        const gameID = await diceGame.methods.gameId().call();
        assert.equal(gameID, 0);
    });
});