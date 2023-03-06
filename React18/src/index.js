import ReactDOM from 'react-dom/client';
import {flushSync} from 'react-dom';
import React from 'react';
class App extends React.Component {
  state = {
    count: 0
  }
  componentDidMount() {
    this.setState({count: this.state.count + 1})
    console.log(this.state.count);
    this.setState({count: this.state.count + 1})
    console.log(this.state.count);
    setTimeout(async () => {
      await this.setState({count: this.state.count + 1})
      await console.log(this.state.count);
      await this.setState({count: this.state.count + 1})
      await console.log(this.state.count);
    });
  }
  render() {
    return <h1>React18 Count: {this.state.count}</h1>
  }
}
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
    <App />
);