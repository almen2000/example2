import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import erc20 from '../ethereum/erc20';
import Layout from '../components/Layout';
import web3 from '../ethereum/web3';
// import Timer from './timerReact';
import leftPad from 'left-pad';

class HomaPage extends Component {

  state = {
    value: 5,
    value1: '5'
  };

  async componentDidMount() {
    
  };

  transfer = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    await erc20.methods.transfer(
      '0xCfc5835d709A837d7445C0a881c293fF58309d5a',
      '100',
      '121'
    ).send({
      from: accounts[0]
    });
  };

  render() {
    return (
      <Layout>
        <div>{web3.utils.keccak256('0x' + leftPad((10).toString(16), 64, 0))}</div>
        <div>{web3.utils.keccak256('0x' + leftPad((11).toString(16), 64, 0))}</div>
        <div>{web3.utils.keccak256('0x' + leftPad((12).toString(16), 64, 0))}</div>
        <div>{web3.utils.keccak256('0x' + leftPad((13).toString(16), 64, 0))}</div>
        <div>{web3.utils.keccak256('0x' + leftPad((14).toString(16), 64, 0))}</div>
        {/* <Timer></Timer> */}
        <Button onClick={this.transfer}>Transfer</Button>
      </Layout>
    );
  }
}

export default HomaPage;

// web3.utils.keccak256('0x' + leftPad((this.state.value).toString(16), 64, 0))