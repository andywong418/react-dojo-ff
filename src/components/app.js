import React, { Component } from 'react';
import FirstRound from './first-level-table';
import SecondRound from './second-level-table';
export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {player1: '', player2: '',player3: '',player4: '',player5: '',player6: '',player7: '',player8: '', winner1:'', winner2:'', winner3:'', winner4: '', winner21: '', winner22: '', finalWinner: ''};
    this.onInputChange1 = this.onInputChange1.bind(this);
    this.onInputChange2 = this.onInputChange2.bind(this);
    this.onInputChange3 = this.onInputChange3.bind(this);
    this.onInputChange4 = this.onInputChange4.bind(this);
    this.onInputChange5 = this.onInputChange5.bind(this);
    this.onInputChange6 = this.onInputChange6.bind(this);
    this.onInputChange7 = this.onInputChange7.bind(this);
    this.onInputChange8 = this.onInputChange8.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  onInputChange1(event){
    this.setState({player1: event.target.value});
  }
  onInputChange2(event){
    this.setState({player2: event.target.value});
  }
  onInputChange3(event){
    this.setState({player3: event.target.value});
  }
  onInputChange4(event){
    this.setState({player4: event.target.value});
  }
  onInputChange5(event){
    this.setState({player5: event.target.value});
  }
  onInputChange6(event){
    this.setState({player6: event.target.value});
  }
  onInputChange7(event){
    this.setState({player7: event.target.value});
  }
  onInputChange8(event){
    this.setState({player8: event.target.value});
  }

  handleClick1(event){
    console.log(event);
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


  handleFormSubmit(event){
    event.preventDefault();
  }
  render() {
    return (
      <div>
      <form className="input-group">
        <input placeholder ="Enter Player 1 Name"  value = {this.state.player1} onChange = {this.onInputChange1}></input>
        <input placeholder ="Enter Player 2 Name" value = {this.state.player2} onChange = {this.onInputChange2}></input>
        <input placeholder ="Enter Player 3 Name" value = {this.state.player3} onChange = {this.onInputChange3}></input>
        <input placeholder ="Enter Player 4 Name" value = {this.state.player4} onChange = {this.onInputChange4}></input>
        <input placeholder ="Enter Player 5 Name" value = {this.state.player5} onChange = {this.onInputChange5}></input>
        <input placeholder ="Enter Player 6 Name" value = {this.state.player6} onChange = {this.onInputChange6}></input>
        <input placeholder ="Enter Player 7 Name" value = {this.state.player7} onChange = {this.onInputChange7}></input>
        <input placeholder ="Enter Player 8 Name" value = {this.state.player8} onChange = {this.onInputChange8}></input>
      </form>

      <FirstRound player1={this.state.player1} player2={this.state.player2} player3={this.state.player3} player4 = {this.state.player4} player5 = {this.state.player5} player6 = {this.state.player6} player7 = {this.state.player7} player8 = {this.state.player8} winner1Click ={this.handleClick1} winner2Click ={this.handleClick2} winner3Click ={this.handleClick3} winner4Click ={this.handleClick4} />

    <SecondRound winner1= {this.state.winner1} winner2 = {this.state.winner2} winner3 = {this.state.winner3} winner4 = {this.state.winner4}/>

      </div>
    );
  }
}
