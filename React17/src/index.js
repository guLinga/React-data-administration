import * as ReactDOM from "react-dom";
import React,{useState,useEffect} from 'react'
class App extends React.Component {
  state = {
      count: 0
  }
  componentDidMount() {
      this.setState({count: this.state.count + 1})
      console.log(this.state.count);
      this.setState({count: this.state.count + 1})
      console.log(this.state.count)
      setTimeout(() => {
          // ReactDOM.unstable_batchedUpdates(() => {
              this.setState({count: this.state.count + 1})
              console.log(this.state.count)
              this.setState({count: this.state.count + 1})
              console.log(this.state.count)
          // }) 
      })
  }
  render() {
      return <h1>Count: {this.state.count}</h1>
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);