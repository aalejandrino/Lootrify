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

    let month = this.state.date.getMonth() + 1;
    let day = this.state.date.getDate();
    let year = this.state.date.getFullYear();

    return (
      <div className="clock">
        <h2 className="clock-text">Cookie Clock</h2>
        <h1 className="time">{hours.length > 1 ? hours : "0"+hours} :
           {" " + (minutes.length > 1 ? minutes : "0"+minutes)} :
           {" " + (seconds.length > 1 ? seconds : "0"+seconds)}
          {checkAmPm}
        </h1>


        <h3>  Date: <br></br>
        {month}/{day}/{year} </h3>

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
