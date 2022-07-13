import React from 'react'
import logo from './weposvg.svg';
import {useState, useEffect} from 'react'
import './App.css';

let curr = 0
let input =""
const url ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/krw/usd.json"
const prices = {
  input: "",
  dhl: "",
  fedex: ""
}

function Page() {
  const [price, setPrice] = useState(prices)
  
  useEffect(function(){
    fetch(url)
    .then(res => res.json())
    .then(function(res){
      curr = Number(res.usd)
    })
  })
  function handleChange(event) {

    setPrice(prev => {
      input = event.target.value
      let usd = Number(input) * curr
      console.log(usd)
      return{
        ...prev,
        input: usd.toFixed(2),
        dhl: ((usd + 45) / .7).toFixed(2),
        fedex: ((usd + 33) / .7).toFixed(2),
      }
  }
    );
  }
  function handleSubmit(event){
    setPrice( prev =>{
      event.preventDefault()
      return{
        ...prev,
        dhl: prev.input * 10,
        fedex: prev.input + 10
      }
    })
  }
    
    return (
      <div className='Main'>
        <div className="title-container">
        <img id="wepo-logo"src={logo}></img>
        <h3>Price Calculator</h3>
        </div>
        <div className='calculator'>
            {curr!==0 &&<p>Exchange rate: <span>1$ = {curr}KRW</span></p>}
          <form  className="form">
            <input onChange={handleChange} placeholder="Input the buying price in KRW here" id="input"/>
            {/*<button onClick={handleSubmit} id="submit" type='submit'>Calculate!</button>*/}
          </form>
          
            {(input.length>0||input !=="") && 
            <div style={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center', }}>
              <div className="priceUsd">
                <p>Buying price in dollar</p>
                <h3>${price.input}</h3>
              </div>
              <div className='result-container'>
                <div id="dhl" className='result'>
                  <h1>DHL</h1>
                  <h1>$ {price.dhl}</h1>
                </div>
                
                <div id="fedex" className='result'>
                  <h1>Fedex</h1>
                  <h1>$ {price.fedex}</h1>
                </div>
              </div>
            </div>
            }
        </div>
      </div>
    );
}



export default Page;
