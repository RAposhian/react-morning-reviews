import React, {Component} from 'react'
import movies from "../data/movies.json";
import ListItem from './ListItem.js';

export default class List extends Component {
   constructor(props) {
      super(props);

      this.state = {
         movies: movies
      }
   }
   render() {
      // console.log(this.state.movies)
      const moviesMap = this.state.movies.map((e) => <ListItem key={e.id} movie={e}/>)
      return(
      <div className="List">{moviesMap}</div>
      )
   }
}
