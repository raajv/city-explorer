import React,{ Component } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

export default class Movie extends Component{
  
  constructor(props){
    super(props);
    this.state={
      error:false,
      movie:{}
    }
  }
  getMovie =async()=>{
    const url = `${process.env.REACT_APP_SERVER_URL}/movie?query=${this.props.city}`;
    try{
    let response = await axios.get(url);
    this.setState({movie:response.data})
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
        Please enter a  city
        </p>
        </Alert>}
        <Button onClick={this.getMovie}>Click to see the movies associated with  {this.props.city}!</Button>
        <Container fluid className="text-center"><Row sm={3}className="justify-content-md-center">
        {this.state.movie.length > 0 && this.state.movie.map((movieName,idx) => 
        <Card style={{ width: '18rem' }} key={idx}>
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movieName.poster_path}`} />
          <Card.Body>
            <Card.Title>{movieName.original_title}</Card.Title>
            <Card.Text>
            {movieName.overview}
            RELEASE DATE: {movieName.release_date}
            </Card.Text>
          </Card.Body>
        </Card> 
        )
      }
          </Row>
          </Container>     
      </>
    )
  }
}

