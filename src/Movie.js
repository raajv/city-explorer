import React,{ Component } from 'react';
import axios from 'axios';
import Movies from './Movies.js'

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
        <Movies  movie = {this.state.movie} error = { this.state.error} getMovie={this.getMovie}/>
      </>
    )
  }
}

