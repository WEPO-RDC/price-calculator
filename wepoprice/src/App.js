import React from 'react'
import logo from './weposvg.svg';

import './App.css';



class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: '',
      dhl: '',
      fedex: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: (event.target.value)
    });
  }
  handleSubmit(event) {
    // Change code below this line
    let sum = (((this.state.input) *0.00076 + 15+5)/.7)
    let totSum = Number.parseInt(sum + (sum *10/100))
this.setState({
  submit: totSum,
  dhl: totSum + 14 +"$",
  fedex: totSum + 3 +"$"
  })
  event.preventDefault()

  }
  render() {
    return (
      <body className='Main'>
        <div className="title-container">
        <img id="wepo-logo"src={logo}></img>
        <h2>Price Calculator</h2>
        </div>
        <div className='calculator'>
          <form onSubmit={this.handleSubmit} className="form">
            <input value={this.state.input} onChange={this.handleChange} placeholder="Input the buying price in KRW here"/>
            <button id="submit" type='submit'>Calculate!</button>
          </form>
            <div className='result-container'>
              <div className='result'>
                <h1>DHL</h1>
                <h1>{this.state.dhl}</h1>
              </div>
              
              <div className='result'>
                <h1>Fedex</h1>
                <h1>{this.state.fedex}</h1>
              </div>
            </div>
        </div>
      </body>
    );
  }
}


export default MyForm;
