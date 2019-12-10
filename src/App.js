import React, { Component } from 'react';
import Login from './components/login/login';
import Register from './components/regiter/register';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';

export default class App extends Component {
  render() {
    const obj = {
      name1: "Ishkhan",
      lastname1: "Davtyan",
      age1: 24,
      ser1: "male",
      name2: "Mayis",
      lastname2: "Tonoyan",
      age2: 24,
      ser2: "txa"
    }
    let arrAll = []
    for (let [key, value] of Object.entries(obj)) {
      arrAll.push(value)
    }


    let arr1 = []

    for (let [key, value] of Object.entries(obj)) {
      if (arr1 === undefined) {
        arr1.push(key.slice(0, -1))
      }
      else {
        const isEl = (el) => el === key.slice(0, -1)
        if (arr1.some(isEl) === false) {
          arr1.push(key.slice(0, -1))
        }

      }
    }

    const header = arr1.map(arr => {
      return (
        <table>
          <tr>
            <th>{arr}</th>
          </tr>
        </table>
      )
    })

    let newArr = [];
    for(let i =0;i<arrAll.length/arr1.length;i++){
      newArr.push(arrAll.slice(i*arr1.length,(i+1)*arr1.length))
    }
    console.log(newArr,'new')

    const any = newArr[0].map(arr=>{
      return(
        <table>
          <tr>
            <th>
              {arr}
            </th>
          </tr>
        </table>
      )
    })
    


      console.log(arrAll)
    console.log(arr1)

    return (
      <div>
        {header}
        {any}
      </div>
    )
  }
}


