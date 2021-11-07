import React,{ Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Weather from './Weather'
import Movie from './Movie.js'
import Movies from './Movies.js'
export default class App extends Component{
  
  constructor(props){
    super(props);
    this.state={
      cityValue : '',
      error :false
    }
  }

  handleClick =async() =>{
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityValue}&format=json`;
    try{
      let response = await axios.get(url)
      console.log (response.data)
      this.setState({location:response.data[0]})
    }catch(err){
      this.setState({error:true})
      console.error(err);
    }
  }
  
handleChange =(e)=>{
 this.setState({cityValue:e.target.value})
}

  render() {
    return (
        < div style={{
          backgroundColor: '#659DBD'}}>
        <h1> ENTER A CITY NAME TO KNOW MORE !!!</h1>
        <InputGroup className="mb-3">
      <FormControl
        onChange ={this.handleChange}
        placeholder="Enter City Name"
        aria-label="Enter City Name"
        aria-describedby="basic-addon2"
        value={this.state.cityValue}
      />
      <Button onClick ={this.handleClick}variant="outline-secondary" id="button-addon2">
        Explore
      </Button>
    </InputGroup>
    {this.state.location && 
      <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Title>{this.state.location.display_name}</Card.Title>
      <Card.Text>
      The latitude and longitude is {this.state.location.lat} , {this.state.location.lon}
      </Card.Text>
      </Card.Body>
      </Card>
    }
      {this.state.location && <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=18&format=jpg}`}/>}
        
        {this.state.error && <Alert variant="danger" onClose={() => this.setState({error:false})} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Please enter a city name and try again!!
        </p>
        </Alert>
        }
      {this.state.location && <Weather city={this.state.cityValue} lat={this.state.location.lat} lon={this.state.location.lon}/>}
      {this.state.location && <Movie city={this.state.cityValue}/>}
      
      </div>
    
    )
  }
}

