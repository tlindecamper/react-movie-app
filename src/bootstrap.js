import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import App from "./components/app";
import AddMovie from "./components/addMovie";
import MovieIndex from "./components/movieIndex";
import ViewMovie from "./components/viewMovie"
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/add_movie'>Add Movie</NavLink>
            <NavLink to='/movie_index'>All Movies</NavLink>
          </div>
          <div>
            <Route exact path='/' component={App} />
            <Route  path='/add_movie' component={AddMovie} />
            <Route  path='/movie_index' component={MovieIndex} />
            <Route  path='/view_movie/:id' component={ViewMovie} />
          </div>
        </div>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
