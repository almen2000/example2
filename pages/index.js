import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import diceGame from '../ethereum/diceGame';
import Layout from '../components/Layout';
import web3 from '../ethereum/web3';
// import web3Server from '../ethereum/web3Server';
import leftPad from 'left-pad';
import Timer from './timer';
import setNewGame from './example2';

class HomaPage extends Component {

  state = {
    value: 5,
    value1: '5',
    loading: false
  };

  async componentDidMount() {
    
  };

  // transfer = async (event) => {
  //   event.preventDefault();
  //   const accounts = await web3.eth.getAccounts();
  //   console.log(accounts);
  //   await erc20.methods.transfer(
  //     '0xCfc5835d709A837d7445C0a881c293fF58309d5a',
  //     '100',
  //     '121'
  //   ).send({
  //     from: accounts[0]
  //   });
  // };

  f = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();

    const result = await diceGame.methods.newGame('9', '300').send({ from: accounts[0] });

    alert(result);

  }

  newGame = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    
    await setNewGame('10', '11');

    this.setState({ loading: false });
  }

  render() {
    return (
      <Layout>
        <div>{web3.utils.keccak256('0x' + leftPad((7).toString(16), 64, 0))}</div>
        <div>{web3.utils.keccak256('0x' + leftPad((11).toString(16), 64, 0))}</div>
        <div>{web3.utils.keccak256('0x' + leftPad((12).toString(16), 64, 0))}</div>
        <div>{web3.utils.keccak256('0x' + leftPad((13).toString(16), 64, 0))}</div>
        <div>{web3.utils.keccak256('0x' + leftPad((14).toString(16), 64, 0))}</div>
        {/* <Timer></Timer> */}
        <Button onClick={this.newGame} loading={this.state.loading}>New Game</Button>
        {/* <Timer></Timer> */}
      </Layout>
    );
  }
}

export default HomaPage;

// web3.utils.keccak256('0x' + leftPad((this.state.value).toString(16), 64, 0))