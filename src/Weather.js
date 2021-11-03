import React,{ Component } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'
export default class Weather extends Component{
  
  constructor(props){
    super(props);
    this.state={
      error:false,
      weather:[]
    }
  }
  getWeather =async()=>{
      const url = `${process.env.REACT_APP_SERVER_URL}/weather?city=${this.props.city}`;
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
      <>
      {this.state.error && <Alert variant="danger" onClose={() => this.setState({error:false})} dismissible>
     <Alert.Heading>Oh! No data available for this city</Alert.Heading>
     <p>
       Please enter Seattle , Paris or Amman!!
     </p>
   </Alert>}
      <button onClick={this.getWeather}>click to see the weather for {this.props.city}!</button>
      {this.state.weather &&  <p> the weather is : min temp :{this.state.weather.min_temp} max temp: {this.state.weather.max_temp} clouds: {this.state.weather.description} </p>}
      
      </>
    )
  }
}