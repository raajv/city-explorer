import React,{ Component } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'

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
       Please enter Seattle , Paris or Amman!!
     </p>
   </Alert>}
      <button onClick={this.getMovie}>click to see the movies for {this.props.city}!</button>
      {this.state.movie.length > 0 && this.state.movie.map((movieName,idx) => <li key={idx}> TITLE: {movieName.original_title}
      OVERVIEW: {movieName.overview} RELEASE DATE: {movieName.release_date} POSTER : <img src ={`https://image.tmdb.org/t/p/w500${movieName.poster_path}`}/> </li> )}
      </>
    )
  }
}