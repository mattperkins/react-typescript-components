import * as React from 'react'
import './App.css'
import MyComp from './MyComp'

interface IProps { name?: string; isGood: boolean; count: number }

interface IState { count: number; }

class MyClass extends React.Component<IProps, IState> 
/* <= if no props use <{}, IState>. If no state just use <IProps> */ 
{
  static defaultProps: Partial<IProps> = {
    name: 'Fred'
  }

   state={
    count: this.props.count
  }

  render() {
    const { name, count } = this.props
    return(
      <div>
        <h1>{name}</h1>
        <h2>{count}</h2>
      </div>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <div>
      <MyClass /* name="Sandy" <= using default props above */ isGood={true} count={11}/>
      <MyComp />
      </div>
    )
  }
}


