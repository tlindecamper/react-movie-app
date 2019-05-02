import React, { Component } from 'react';

export default class Movie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            genre: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        let title = this.state.title
        let genre = this.state.genre

        fetch ("http://localhost:5000/movie/input", {
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
            },
            body:JSON.stringify({title:title, genre:genre})
        })
        .then(response => {return response.json()})
        .then(responseData => {return responseData})
        .then(() => {this.props.history.push('/movie_index')})
        .catch(err =>{
            console.log("Fetch Error" + err)
        })    
    }

  render() {
    return (
      <div className=''>
        <h1>Add a Movie</h1>
        <form onSubmit={this.handleSubmit}> 
            <label>Title</label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
            <label>Genre</label>
            <input type="text" name="genre" value={this.state.genre} onChange={this.handleChange} />
            <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
