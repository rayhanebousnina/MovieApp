import './App.css';
import Navigation from './Nav'
import Footer from './Footer'
import {Card, Button} from 'react-bootstrap'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


function Series({favorite, movie, getFavorites, getFavoriteMovie, search,onSearch}) {
  return (
   
    movie.filter((el) => {
      if ((el.Type === "serie" && search === "") || (el.Type === "serie" && el.Title.toLowerCase().includes(search.toLowerCase()))){
        return el
      }
     }).map(el => 
    <div>
        <div className="cover-Serie">
          
          <Navigation favorite={favorite} onSearch={onSearch}/>
        </div> 
        <div>   
          <div className="mt-5">
                <Card className="movie-card bg-dark text-white" style={{ width: '18rem' }}>
                    <Card.Img src={el.Poster} alt="Card image" />
                    <Card.ImgOverlay className="d-flex align-items-start justify-content-end">
                        <Card.Title><Button onClick={() => {getFavorites() ; getFavoriteMovie(el)}}><i class="fas fa-heart fa-2x"></i></Button></Card.Title>                        
                        <Card.Text></Card.Text>
                    </Card.ImgOverlay>
                    <div className="p-3 body-card">
                        <h6>{el.Title}</h6>
                        <h6>{el.Year}</h6>
                        <Rater total={5} rating={el.Rating} interactive={false} />
                    </div>
                </Card>
          </div>          
        </div>
        <Footer/>
    </div>
  ));
}

export default Series;