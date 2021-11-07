import React,{ Component } from 'react';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'


export default class WeatherDay extends Component{

render(){
  return(
    <div style={{
      backgroundColor: '#808080'}}>
      {this.props.error && <Alert variant="danger" onClose={() => this.setState({error:false})} dismissible>
      <Alert.Heading>Oh! No data available for this city</Alert.Heading>
      <p>
      Please enter a city name !
      </p>
      </Alert>}
       <Button onClick={this.props.getWeather}>click to see the weather for {this.props.city}!</Button>
      {this.props.dayWeather &&  <p> the weather is : Timezone:{this.props.dayWeather.timezone} Current Temp: {this.props.dayWeather.temp} Clouds: {this.props.dayWeather.description} </p>}
    </div>
  )
}
















}