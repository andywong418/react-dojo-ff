import React, {Component} from 'react';

export default class SecondRound extends Component{
  render(){
    return (
      <td> {this.props.winner} </td>

      // <table className="table">
      // <tbody>
      //   <tr>
      //     <td > {this.props.winner1}</td>
      //   </tr>
      //   <tr>
      //
      //
      //   </tr>
      //   <tr>
      //     <td>{this.props.winner2} </td>
      //
      //   </tr>
      //   <tr>
      //
      //
      //   </tr>
      //   <tr>
      //     <td >{this.props.winner3} </td>
      //   </tr>
      //   <tr>
      //
      //
      //   </tr>
      //   <tr>
      //     <td>{this.props.winner4} </td>
      //   </tr>
      //   <tr>
      //
      //   </tr>
      //   </tbody>
      // </table>
    )
  }
}
