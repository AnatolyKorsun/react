import React, { Component } from 'react'
class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    componentDidMount() {
      console.log(this)
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    tick() {
      this.setState({
        date: new Date()
      });
    }
    render() {
      return (
        <div>
          <h1>Time:{this.state.date.toLocaleTimeString()}.</h1>
        </div>
      );
    }
  }
  export default Clock