import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './App.css';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


function PopMovies({search , movie, getFavorites, favoriteMovie, getFavoriteMovie}) {
    
  return (
   
      // Mapping data in cards
      movie.filter(el => 
        el.Title.toLowerCase().includes(search.toLowerCase())
     ).map(el => 

        <div>   
                    
            {/* Movie card */}
           <div className="mt-5">
                <Card className="movie-card bg-dark text-white">
                    <Card.Img src={el.Poster} alt="Card image" />
                    <Card.ImgOverlay className="d-flex align-items-start justify-content-end">                       
                        <Card.Title>
                      <Button
                        onClick={() => {
                          getFavorites();
                          getFavoriteMovie(el);
                        }}
                      >
                        <i class="fas fa-heart fa-2x"></i>
                      </Button>
                    </Card.Title>
                    </Card.ImgOverlay>
                    <div className="p-3 body-card">
                        <h6>{el.Title}</h6>
                        <h6>{el.Year}</h6>
                        <Rater total={5} rating={el.Rating} interactive={false} />
                    </div>
                </Card>
           </div>
           
        </div>
        
    )
    
  );
}

export default PopMovies;
