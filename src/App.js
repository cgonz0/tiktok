import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
// import { Form, FormControl, Button} from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'November 18, 2018',
      newDeadline: ''
    };
    this.changeDeadline = this.changeDeadline.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline})
  }

  //Update state as target value changes. no need for changeDeadline submit.
  // handleChange(event) {
  //   this.setState({
  //     deadline: event.target.value
  //   });
  // }

  handleChange(event) {
    this.setState({
      newDeadline: event.target.value
    });
  }


  render() {
    return (
      <div className="App">
        <div className="App-title">
          <span className="brand">TikTok</span>{this.state.deadline}
        </div>
        <Clock
          deadline = {this.state.deadline}
        />
        <div>
          <input
            placeholder="Enter date"
            onChange={this.handleChange}
          />
          <button onClick={this.changeDeadline}>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;