import React,{ Component } from 'react';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

export default class Movies extends Component{

  render(){
    return(
     <>
      {this.props.error && <Alert variant="danger" onClose={() => this.setState({error:false})} dismissible>
        <Alert.Heading>Oh! No data available for this city</Alert.Heading>
        <p>
        Please enter a  city
        </p>
      </Alert>}
        <Button onClick={this.props.getMovie}>Click to see the movies associated with it!</Button>
        <Container fluid className="text-center"><Row sm={3}className="justify-content-md-center">
        {this.props.movie.length > 0 && this.props.movie.map((movieName,idx) => 
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
