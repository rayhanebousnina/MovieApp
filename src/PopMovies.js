import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './App.css';

function PopMovies({search , movie, getFavorites}) {
    
  return (
     search === '' ? 

     movie.map(el => 
     
             <div>   
                         
                 {/* Movie card */}
                <div className="mt-5">
                     <Card className="movie-card bg-dark text-white">
                         <Card.Img src={el.posterUrl} alt="Card image" />
                         <Card.ImgOverlay className="d-flex align-items-start justify-content-end">
                             <Card.Title><Button onClick={getFavorites}><i class="fas fa-heart fa-2x"></i></Button></Card.Title>                        
                             <Card.Text></Card.Text>
                         </Card.ImgOverlay>
                         <div className="p-3 body-card">
                             <h6>{el.title}</h6>
                             <h6>{el.year}</h6>
                             <p><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>
                         </div>
                     </Card>
                </div>
                
             </div>
             
         ) :
      
      // Mapping data in cards
      movie.filter(el => 
        el.title.toLowerCase().includes(search.toLowerCase())
     ).map(el => 

        <div>   
                    
            {/* Movie card */}
           <div className="mt-5">
                <Card className="movie-card bg-dark text-white">
                    <Card.Img src={el.posterUrl} alt="Card image" />
                    <Card.ImgOverlay className="d-flex align-items-start justify-content-end">
                        <Card.Title><i class="fas fa-heart fa-2x"></i></Card.Title>                        
                        <Card.Text></Card.Text>
                    </Card.ImgOverlay>
                    <div className="p-3 body-card">
                        <h6>{el.title}</h6>
                        <h6>{el.year}</h6>
                        <p><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>
                    </div>
                </Card>
           </div>
           
        </div>
        
    )
    
  );
}

export default PopMovies;
