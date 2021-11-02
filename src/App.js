import React,{ Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
export default class App extends Component{
  
  constructor(props){
    super(props);
    this.state={
      cityValue : '',
      
    }
  }

  handleClick =async() =>{
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityValue}&format=json`;
    let response = await axios.get(url)
    console.log (response.data)
    this.setState({location:response.data[0]})

  }

handleChange =(e)=>{
 this.setState({cityValue:e.target.value})
}
  render() {
    return (
      <>
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
    </Card>}
      </>
    
    
)
}
}

