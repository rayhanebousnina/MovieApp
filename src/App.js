import 'bootstrap/dist/css/bootstrap.min.css';
import {state, useState, useEffect} from 'react'
import Favorite from './Favorite';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';
import Home from './Home'
import Genre from './Genre'
import Series from './Series'


function App() {

  // UseState movie declaration 
  const [movie, setMovie] = useState([])
    
  // Fetch movies and add it to my state
  const getMovie = ()=>{
      
      fetch('movie.json').then(
          response => response.json()).then 
                  (movies => setMovie(movies));
  }
  
  useEffect(()=> {getMovie()
  },[])

  // UseState search declaration 
  const [search, setSearch] = useState('');
  function handleChange(e) {
    setSearch(e.target.value);
}

  // UseState favorite : It is the array that stores the favorites item’s numbers.
  const [favorite, setFavorite] = useState(0);
  const getFavorites =() =>{
    setFavorite(favorite +1)
  }
  // UseState for adding favorite movies
  const [favoriteMovie, setFavoriteMovie] = useState([])
  const getFavoriteMovie = (el) => {    
  

    // const found = favoriteMovie.find(element => element.id !== el.id);
    // favoriteMovie.filter(e => e.id !== el.id)
    //favoriteValue.push(element)
    setFavoriteMovie(favoriteMovie => [...favoriteMovie, el])
    
  }

  const removeFavoriteMovie = (el) => {
    // favoriteMovie.splice(favoriteMovie.indexOf(el),1)
    // setFavoriteMovie(favoriteMovie)


    let index = favoriteMovie.indexOf(el)
    console.log(index)
    favoriteMovie.splice(index,1)

    // let index = favoriteMovie.indexOf(el)
    // delete favoriteMovie[index]

    setFavoriteMovie(favoriteMovie)
    setFavorite(favorite -1)
    console.log(favoriteMovie)
  }
  const removeAll = () => {
    // setFavoriteMovie(favoriteMovie => [])
    favoriteMovie.splice(0, favoriteMovie.length)
    setFavorite(favorite => 0)

  }
  return (
    <div>
       <BrowserRouter>       
        <Route exact path="/"><Home search={search} onSearchChange={handleChange} movie={movie} favorite={favorite} getFavorites={getFavorites} favoriteMovie={favoriteMovie} getFavoriteMovie={getFavoriteMovie}/></Route>
        <Route path="/series"><Series favorite={favorite}/></Route>
        <Route path="/genres"> <Genre favorite={favorite}/> </Route>
        <Route path="/favorites"><Favorite favorite={favorite} favoriteMovie={favoriteMovie} removeFavoriteMovie={removeFavoriteMovie} removeAll={removeAll}/></Route>
      </BrowserRouter> 
      
    </div>
  );
}

export default App;
