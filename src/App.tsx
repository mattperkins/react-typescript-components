
import * as React from 'react'

import './App.css'

import ClassComp from './ClassComp'
import FuncComp from './FuncComp'
import MaxComp from './MaxComp'

export default class App extends React.Component {
      
  render() {
    return (
      <div>

      <ClassComp /* name="Sandy" <= using default props above */ count={11} />

      <FuncComp />

      <MaxComp name="Fred"/>
      </div>
    )
  }
}


