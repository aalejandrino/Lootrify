import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();

    this.tick = this.tick.bind(this);

    this.state = {
      date : new Date()
    }
  }

  render() {
    let hours = (this.state.date.getHours()%12).toString();
    let minutes = this.state.date.getMinutes().toString();
    let seconds = this.state.date.getSeconds().toString();
    let am = " AM"
    let pm = " PM"
    let checkAmPm = this.state.date.getHours() >= 12 ? pm : am;

    return (
      <div>
        <h2>Cooky Clock here !</h2>
        <h2>{hours.length > 1 ? hours : "0"+hours} :
           {" " + (minutes.length > 1 ? minutes : "0"+minutes)} :
           {" " + (seconds.length > 1 ? seconds : "0"+seconds)}
          {checkAmPm}
        </h2>
      </div>
    );
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  tick() {
    let newDate = new Date();
    this.setState({date : newDate});
  }

}

export default Clock;
