import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    // console.log(this.props.deadline)
  }

  componentWillMount() {
    this.getTimeUnitl(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUnitl(this.props.deadline), 1000)
  }

  // leading0(num) {
  //   if (num < 10) {
  //     return '0' + num;
  //   }
  //   return num;
  // }

  leading0(num) {
   return num < 10 ? '0' + num : num;
  }

  getTimeUnitl(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    // console.log('time', time);
    //modulo (outputs remainder of a function) 10%3, output = 1 / 6%3, output = 0
    const seconds = Math.floor((time/1000)%60);
    const minutes = Math.floor((time/1000/60)%60);
    const hours = Math.floor(time/(1000*60*60)%24);
    const days = Math.floor(time/(1000*60*60*24));

    // console.log('seconds', seconds, 'minutes', minutes, 'hours', hours, 'days', days);

    this.setState({
      days,
      hours,
      minutes,
      seconds
    });
  }

  render() {
    // this.getTimeUnitl(this.props.deadline);
    return (
      <div className="Clock">
        <div className="Days-wrapper">
          <div className="Days">{this.leading0(this.state.days)}</div>
          <div className="Days-text">days</div>
        </div>

        <div className="Hours-wrapper">
          <div className="Hours">{this.leading0(this.state.hours)}</div>
          <div className="Hours-text">hours</div>
        </div>

        <div className="Minutes-wrapper">
          <div className="Minutes">{this.leading0(this.state.minutes)}</div>
          <div className="Minutes-text">minutes</div>
        </div>

        <div className="Seconds-wrapper">
          <div className="Seconds">{this.leading0(this.state.seconds)}</div>
          <div className="Seconds-text">seconds</div>
        </div>
      </div>
    )
  }

}

export default Clock