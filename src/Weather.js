import React,{ Component } from 'react';
import axios from 'axios';

export default class Weather extends Component{
  
  constructor(props){
    super(props);
    this.state={
      weather:{}
      
    }
  }
  getWeather =async()=>{
      const url = `${process.env.REACT_APP_SERVER_URL}/weather`;
      let response = await axios.get(url);
      this.setState({weather:response.data})
      console.log(response.data);
      this.findCity(response.data)
  }

  findCity =(res)=>{
    console.log(this.props.city)
   let newCity= res.find(({ city_name }) => city_name === this.props.city)
    this.setState({cityWeather:newCity})
    console.log(newCity)
  }
  render(){
    return(
      <>
      <button onClick={this.getWeather}>click me</button>
      <h1>{this.state.city}</h1>
      </>
    )
  }
}