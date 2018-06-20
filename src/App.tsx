import * as React from 'react'
import './App.css'
import MyComp from './MyComp'
import { WSAEALREADY } from 'constants';

interface IProps { name?: string; isGood?: boolean; count: number }

interface IState { count: number; }

class MyClass extends React.Component<IProps, IState> 
/* <= if no props use <{}, IState>. If no state just use <IProps> */ 

{
  static defaultProps: Partial<IProps> = {
    name: 'Fred'
 }

   state: IState = {
    count: this.props.count
  }

  render() {
    const { name, count } = this.props
    // const { count } = this.state
    return(
      <div>
        <h1>{name}</h1>
        <h2>{count}</h2>
      </div>
    )
  }
}

export default class App extends React.Component {
  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {name, value}: any = e.target
    this.setState({
      [name]: value
    })
  }
  
  render() {
    return (
      <div>
      <MyClass /* name="Sandy" <= using default props above */ count={11}/>
      <input name="name" value={name} onChange={this.handleChange}
      <MyComp />
      </div>
    )
  }
}


