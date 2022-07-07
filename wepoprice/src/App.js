import React from 'react'
import logo from './logo.svg';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="appIcon.png" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src="./appIcon.png"></img>
      </header>
    </div>
  );
}
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
        <h1>WEPO Price Calculator</h1>
        <div className='calculator'>
          <form onSubmit={this.handleSubmit} className="form">
            <input value={this.state.input} onChange={this.handleChange} placeholder="Input the buying price here"/>
            <button type='submit'>Submit!</button>
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
