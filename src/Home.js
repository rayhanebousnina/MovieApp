import './App.css';
import {Container, Row} from 'react-bootstrap'
import PopMovies from './PopMovies'
import Navigation from './Nav'
import Footer from "./Footer";

function Home({search, onSearch, movie, favorite, getFavorites, favoriteMovie, getFavoriteMovie}) {
  
  return (
    <div>
        {/* NavigationBar and Cover Section */}
        <div className="cover">
          <Navigation  movie={movie} search= {search} onSearch={onSearch} favorite={favorite}/>
          <h1 className="cover-title">Night Stalker :<br></br>
           The serial killer chase</h1>
           <p className="cover-subtitle">1 | <span className="year">16+</span> | 1 season | Documentaries about real crimes</p>
           <p className="cover-subtitle">Under the glorious sunny "Los Angeles" sky in 1985, a ruthless thug is ruthless ... and no interrogators will rest until they catch him in this true crime story.</p>
           <button className="cover-subtitle btn-signIn">Watch Now</button>
        </div>
        <p className="box"><div className="enjoy">Enjoy watching whatever you want</div><button className="btn-signIn">Subscribe Now</button></p>
        {/* Popular Movies Section */}
        <div className="my-5 mx-3">
          <h2 className="head-title pb-2">
            <span>P</span>opular <span>M</span>ovies
          </h2>
          <Container className="mt-5 d-flex justify-content-around flex-wrap">
            
            <PopMovies search= {search} movie={movie} getFavorites={getFavorites} favoriteMovie={favoriteMovie} getFavoriteMovie={getFavoriteMovie}/>
            
          </Container>
        </div>
        
        <Footer />
    </div>
  );
}

export default Home;