import React from 'react'
import {Card, Button, Col, Row} from 'react-bootstrap'
import './App.css';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


function PopMovies({search , movie, getFavorites, favoriteMovie, getFavoriteMovie}) {
    
  return (
   
      // Mapping data in cards
      Object.keys(movie).filter(el => 
        movie[el].Title.toLowerCase().includes(search.toLowerCase())
     ).map(el => 

        <div>   
             <Row>       
            {/* Movie card */}
           
                <Card className="movie-card bg-dark text-white my-3" style={{ width: '16rem'}}>
                    <Card.Img src={movie[el].Poster} alt="Card image" />
                    <Card.ImgOverlay className="d-flex align-items-start justify-content-end">                       
                        <Card.Title>
                      <Button
                        onClick={() => {
                          getFavorites();
                          getFavoriteMovie(movie[el]);
                        }}
                      >
                        <i class="fas fa-heart fa-2x"></i>
                      </Button>
                    </Card.Title>
                    </Card.ImgOverlay>
                    <div className="p-3 body-card">
                        <h6>{ movie[el].Title}</h6>
                        <h6>{ movie[el].Year}</h6>
                        <Rater total={5} rating={ movie[el].Rating} interactive={false} />
                    </div>
                </Card>          
           </Row>
        </div>
        
    )
    
  );
}

export default PopMovies;
