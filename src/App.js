import React from 'react'
import './App.css'
import List from './Components/List'


const App = props => {
   return (
      <div className="App">
         <h1 className="movie-list-title">This is the Most Amazing Movie List:</h1>
         <List />
         
      </div>
   )
}

export default App;



