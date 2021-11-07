import React,{ Component } from 'react';
import axios from 'axios';
import WeatherDay from './WeatherDay.js'
export default class Weather extends Component{
  
  constructor(props){
    super(props);
    this.state={
      error:false,
      weather:{}
    }
  }
  getWeather =async()=>{
      const url = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${this.props.lat}&lon=${this.props.lon}`;
      try{
      let response = await axios.get(url);
      this.setState({weather:response.data[0]})
      console.log(response.data);}
      catch(err){
      this.setState({error:true})
      }
  }
  
  render(){
    return(
      <div >
        <WeatherDay dayWeather={this.state.weather} getWeather={this.getWeather} error={this.state.error}/>
      </div>
    )
  }
}