import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Nav'
import PopMovies from './PopMovies'
import Footer from './Footer'
import {Container, Row} from 'react-bootstrap'
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

// import Series from "./series";
// import Genre from "./genre";
import './App.css';

function App() {
  return (
    <div>
       <BrowserRouter>
         {/* NavigationBar and Cover Section */}
        <div className="cover">
          <Navigation/>
          <img className="btn-play" src="https://www.nicepng.com/png/full/621-6219971_featured-recorded-webinar-ville-de-saint-etienne.png"></img>
        </div>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/movies" component={PopMovies} />
          <Route path="/series" component={Series} />
          <Route path="/genre" component={Genre} />
        </Router>
      </BrowserRouter>
     
      {/* Popular Movies Section */}
      <Container><Row className="inline-cards"><PopMovies/></Row></Container>
      <Footer/>
    </div>
  );
}

export default App;
