// const { name, value } : any = e.currentTarget
// const { name, value } : { name: string; value: boolean; } = e.currentTarget
// const { name, value } : { name: keyof IState; value: string; } = e.currentTarget

// import { omit } from "lodash" <= add lodash to images.d.ts or your own myTypes.d.ts file:
// declare module 'lodash'
// OR ignore adding to .d.ts file and:
// $ yarn add -D @types/lodash <= but not all libraries supported

import * as React from 'react'

import './App.css'
import MyComp from './MyComp'

// array<string>
interface IProps { name?: string; isGood?: boolean; count: number }

interface IState { count: number; lemon: string}

class MyClass extends React.Component<IProps, IState> 
/* <= if no props use <{}, IState>. If no state just use <IProps> */ 

{
  static defaultProps: Partial<IProps> = {
    name: 'Fred'
 }

   state: IState = {
    count: this.props.count,
    lemon: ''
  }

    // handleChange = (e: any) => {} <= covers every element
    handleChange = (e: React.FormEvent<HTMLInputElement>) => {

    this.setState({
        lemon : "Bob"

    })
  }
  
  render() {
    const { name, count } = this.props
    const { lemon } = this.state
    return(
      <div>
        <h1>{name}</h1>
        <h2>{count}</h2>
        <input name={lemon} value={lemon} onChange={this.handleChange} />
      </div>
    )
  }
}

export default class App extends React.Component {
      
  render() {
    return (
      <div>
      <MyClass /* name="Sandy" <= using default props above */ count={11}/>
      
      <MyComp />
      </div>
    )
  }
}


