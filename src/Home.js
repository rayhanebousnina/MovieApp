import './App.css';
import {Container, Row} from 'react-bootstrap'
import PopMovies from './PopMovies'
import Navigation from './Nav'
import Footer from './Footer'

function Home({search, onSearchChange, movie, favorite, getFavorites, favoriteMovie, getFavoriteMovie}) {
  
  return (
    <div>
        {/* NavigationBar and Cover Section */}
        <div className="cover">
          <Navigation search= {search} onSearch={onSearchChange} favorite={favorite}/>
          <img className="btn-play mb-5" src="https://www.nicepng.com/png/full/621-6219971_featured-recorded-webinar-ville-de-saint-etienne.png"></img>          
        </div>
        {/* Popular Movies Section */}
        <Container className="my-5"><h2 className="head-title pb-2"><span>P</span>opular <span>M</span>ovies</h2><Row className="inline-cards"><PopMovies search= {search} movie={movie} getFavorites={getFavorites} favoriteMovie={favoriteMovie} getFavoriteMovie={getFavoriteMovie}/></Row></Container>
        <Footer/>
        
    </div>
  );
}

export default Home;