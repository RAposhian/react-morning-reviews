import React, {Component} from 'react';


const ListItem = ({movie}) => {
   // console.log(movie)
   
   return(
   <div className="List-Item">
      <img alt={movie.title} className='movie-poster' src={movie.posterImg}/>
   <div className='movie-info'></div>
      <p>{movie.title}</p>
      <p>{movie.year}</p>
   </div>
   )
}


export default ListItem;