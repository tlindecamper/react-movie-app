import React, { Component } from 'react';
import { Link }  from "react-router-dom";


export default class MovieIndex extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch ("http://localhost:5000/movies", {
            method: "GET",
            headers: {
                "accepts": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(response =>{return response.json()})
        .then(data => {this.setState({movies: data})})
        
        .catch(err => {
            console.log("Fetch Error" + err)
        })
    }

  render() {
    return (
      <div className=''>
        <h1>List of all movies</h1>
        {this.state.movies.map((movie) => (
            <div key={movie[0]}>
                <h2>Movie Title: {movie[1]}</h2>
                <h3>Movie Genre: {movie[2]}</h3>
                <Link to ={`/view_movie/${movie[0]}`}>View Movie</Link>

            </div>           
        ))}
      </div>
    );
  }
}