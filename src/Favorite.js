import React from 'react'
import Navigation from './Nav'
import Footer from './Footer'
import {Card, Button} from 'react-bootstrap'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './App.css';


const Favorite = ({favorite, favoriteMovie, removeFavoriteMovie, removeAll}) => {
  return(
   
    <div>
        <div className="cover-favorite">
          
          <Navigation favorite={favorite}/>
          <h1 className="title-favorite">Favorite movies</h1>
        </div>
        

        { favoriteMovie.map(el => 
      
         
          <div className="mt-5">
            <Button className="btn-remove" onClick={()=>{removeFavoriteMovie(el)}}>Remove from favorites</Button>
            <Card className="movie-card bg-dark text-white" style={{ width: '18rem' }}>
                <Card.Img src={el.Poster} alt="Card image" />
                
                <div className="p-3 body-card">
                    <h6>{el.Title}</h6>
                    <h6>{el.Year}</h6>
                    <Rater total={5} rating={el.Rating} interactive={false} />
                    
                </div>
            </Card>
            
          </div>
        )}

        <Button className="btn-remove" onClick={()=>{removeAll()}}>Remove All</Button>
        <Footer/>
    </div>
   )

 }

export default Favorite