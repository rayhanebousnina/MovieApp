import React, {useState,useEffect}from 'react'
import {Card, Col} from 'react-bootstrap'
import './App.css';

function PopMovies() {
    // UseState declaration
    const [movie, setMovie] = useState([])
    
    // Fetch movies and add it to my state
    const getMovie = ()=>{
        
        fetch('movies.json').then(
            response => response.json()).then 
                    (movies => setMovie(movies));
    }
    
    useEffect(()=> {getMovie()
    },[])

    // console.log(movie)
  return (
      // Mapping data in cards
    movie.map(el => 

        <div>
            {/* Movie card */}
           <div className="mt-5">
                <Card className="movie-card bg-dark text-white">
                    <Card.Img src={el.posterUrl} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                    <h1>ahahh</h1>
                </Card>
           </div>
        </div>
        
    )
    
  );
}

export default PopMovies;
