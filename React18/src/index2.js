import React, { Component } from 'react'
import { flushSync } from 'react-dom';
import ReactDOM from 'react-dom/client';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 1,
      num2: 1
    }
  }
  handleClick(){
    setTimeout(()=>{
      flushSync(()=>{
        this.setState(({num1})=>({
          num1: num1+1
        }))
      })
      console.log(this.state);
      this.setState(({num2})=>({
        num2: num2+1
      }))
    })
  }
  render() {
    console.log('render');
    return (
      <div>
        num1:{this.state.num1}-num2:{this.state.num2}
        <button onClick={()=>{
          this.handleClick()
        }}>Next</button>
      </div>
    )
  }
}
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
    <App />
);
/*
  上述代码点击的时候会输出一下内容：
  {num1: 1, num2: 1}
  render
*/