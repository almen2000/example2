import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import diceGame from '../ethereum/diceGame';
import Layout from '../components/Layout';
import web3 from '../ethereum/web3';
<<<<<<< HEAD
// import web3Server from '../ethereum/web3Server';
import leftPad from 'left-pad';
import Timer from './timer';
=======
import diceGame1 from '../ethereum/web3Server';
import leftPad from 'left-pad';
import Timer from './timerReact';
>>>>>>> 82640e09d4549bc52ed2a2ad9a9e85fd66ac1c62

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
<<<<<<< HEAD
    const accounts = await web3.eth.getAccounts();
=======
    this.setState({ loading: true });
>>>>>>> 82640e09d4549bc52ed2a2ad9a9e85fd66ac1c62

    console.log(diceGame1.methods.newGame('9', '300').send({ from: '0xCE2496baff9b404b9C8f5445B48bA92441ed6B33' }));
    console.log(await diceGame1.methods.getGameById(0).call());
    const result = await diceGame1.methods.newGame('9', '300').send({ from: '0xCE2496baff9b404b9C8f5445B48bA92441ed6B33' });

    alert("end")
    alert(result);
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
<<<<<<< HEAD
        <Button onClick={this.f}>Transfer</Button>
        <Timer></Timer>
=======
        <Button onClick={this.f} loading={this.state.loading}>Transfer</Button>
        <Timer />
>>>>>>> 82640e09d4549bc52ed2a2ad9a9e85fd66ac1c62
      </Layout>
    );
  }
}

export default HomaPage;

// web3.utils.keccak256('0x' + leftPad((this.state.value).toString(16), 64, 0))