import React from 'react';

class Weather extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      weather : "snowing",
      lat : "hi",
      lon : "hello",
      url : "http://api.openweathermap.org/data/2.5/weather?"
    }

    this.getinfo = this.getinfo.bind(this);
  }

  render() {
    let html;

    if (this.state.weather) {
      let weather = this.state.weather;
      let main = weather.main;

      console.log(weather);
      console.log(weather.weather);
      console.log(main);
      // console.log(main.temp);  // .temp doesn't work for some reason? wth?
      // can't access data in this.state.weather.main

    html =  <div className="w">
              <p>{weather.name}</p>
              <p>{JSON.stringify(weather)}</p>
              <p>{JSON.stringify(weather.weather)}</p>
              <p>{JSON.stringify(main)}</p>

            </div>
          }

    //main.temp in fahrenheit
    // °F = K × 1.8 - 459.67 (Kelvin to fahrenheit)

    return (
      <div className="weather">
        {html}
      </div>
    );
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getinfo);
  }

  getinfo(position) {
    // api.openweathermap.org/data/2.5/weather?lat=35&lon=139
    // API call by coordinates
    let lati = position.coords.latitude;
    let long = position.coords.longitude;
    let myAPI = "bb5690b06d5f6cba115d6b77ce6198ee";

    let url = this.state.url + `lat=${lati}&lon=${long}&APPID=` + myAPI;

    this.state.url = url;

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
    if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
      const myArr = JSON.parse(xmlhttp.responseText);
      this.setState({weather: myArr});
      }
    };

    xmlhttp.open('GET', this.state.url, true);
    xmlhttp.send();


  }



}


export default Weather;
