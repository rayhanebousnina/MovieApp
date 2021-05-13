import 'bootstrap/dist/css/bootstrap.min.css';
import {state, useState, useEffect} from 'react'
import Favorite from './Favorite';
import { BrowserRouter, Route } from "react-router-dom";

// import Series from "./series";
// import Genre from "./genre";
import './App.css';
import Home from './Home'
import Genre from './Genre'
import Series from './Series'
function App() {

  // UseState movie declaration 
  const [movie, setMovie] = useState([])
    
  // Fetch movies and add it to my state
  const getMovie = ()=>{
      
      fetch('movies.json').then(
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

  // UseState favorite
  const [favorite, setFavorite] = useState(0);
  const getFavorites =() =>{
    setFavorite(favorite+1)
  }
  return (
    <div>
       <BrowserRouter>       
        <Route exact path="/"><Home search={search} onSearchChange={handleChange} movie={movie} favorite={favorite} getFavorites={getFavorites}/></Route>
        <Route path="/series"><Series favorite={favorite}/></Route>
        <Route path="/genres"> <Genre favorite={favorite}/> </Route>
        <Route path="/favorites"><Favorite favorite={favorite}/></Route>
      </BrowserRouter> 
      
    </div>
  );
}

export default App;
