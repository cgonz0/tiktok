import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Clock from './Clock';

// import { Form, FormControl, Button} from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    let now = new Date();
    let future = now.setDate(now.getDate() + 1);
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    this.state = {
      deadline: now.toLocaleDateString("en-us", options),
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
          <span className="brand">TikTok</span>
        </div>
        <div className="countdown">Countdown to</div>
        <div className="Date">{this.state.deadline}</div>
        <hr></hr>
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