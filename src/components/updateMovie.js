import React, { Component } from 'react';
import {withRouter} from "react-router"


 class UpdateMovie extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            id: 0,
            title: "",
            genre: "",
            formHidden: true
        }
        this.editMovie = this.editMovie.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange() {
        this.setState({[event.target.name]: event.target.value})
    }


    editMovie() {
        this.setState({id: this.props.ourProp[0]})
        this.setState({title: this.props.ourProp[1]})
        this.setState({genre: this.props.ourProp[2]})
        this.setState({formHidden: !this.state.formHidden})              
    }

    handleSubmit(event) {
        event.preventDefault()
        let id = this.state.id;
        let title = this.state.title;
        let genre = this.state.genre;

        fetch(`http://localhost:5000/update_movie/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"    
            },
            body:JSON.stringify({title: title, genre: genre})
        }).then(response => { return response.json()})
        .then(responseData => {return responseData})
        .then(() => {this.props.history.push('/movie_index')})
        .catch(err => {
            console.log("Put Error " + err)
        })
    }

  render() {
    return (
      <div className=''>
        <h1>Update Movie information</h1>
        <button onClick={this.editMovie}>Update this Movie</button>

        <form onSubmit={this.handleSubmit} style = {{visibility: this.state.formHidden ? "hidden": "visible"}}> 
            <label>Title</label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
            <label>Genre</label>
            <input type="text" name="genre" value={this.state.genre} onChange={this.handleChange}/>
            <input type="submit" value="submit"/>
        </form>
           
      </div>
    );
  }
}

export default withRouter(UpdateMovie) 