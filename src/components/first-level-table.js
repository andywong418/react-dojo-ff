import React, {Component} from 'react';

import SecondRound from './second-level-table';
export default class FirstRound extends Component{
  constructor(props){
    super(props);
    this.state={winner1:'', winner2:'', winner3:'', winner4: ''};
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
  }
  handleClick1(event){
    this.setState({winner1: event.target.html });
  }

  handleClick2(event){
    this.setState({winner2: event.target.html});
  }

  handleClick3(event){
    this.setState({winner3: event.target.html});
  }
  handleClick4(event){
    this.setState({winner4: event.target.html});
  }

  render(){
    return (
      <table className="table">

      <tbody>
        <tr>
          <td onclick={this.props.winner1Click}> {this.props.player1}</td>
          <SecondRound winner = {this.state.winner1} />
        </tr>
        <tr>
          <td onclick={this.props.winner1Click}> {this.props.player2}</td>

        </tr>
        <tr>
          <td onclick={this.props.winner2Click}>{this.props.player3} </td>
        </tr>
        <tr>
          <td onclick={this.props.winner2Click}> {this.props.player4}</td>

        </tr>
        <tr>
          <td onclick={this.props.winner3Click}>{this.props.player5} </td>
        </tr>
        <tr>
          <td onclick={this.props.winner3Click}>{this.props.player6} </td>

        </tr>
        <tr>
          <td onclick={this.props.winner4Click}>{this.props.player7} </td>

        </tr>
        <tr>
          <td onclick={this.props.winner4Click}>{this.props.player8} </td>

        </tr>
        </tbody>
      </table>
    )
  }
}
