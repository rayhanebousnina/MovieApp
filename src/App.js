import 'bootstrap/dist/css/bootstrap.min.css';

import PopMovies from './PopMovies'
import Footer from './Footer'
import {Container, Row} from 'react-bootstrap'
import { BrowserRouter, Route } from "react-router-dom";

// import Series from "./series";
// import Genre from "./genre";
import './App.css';
import Home from './Home'
import Genre from './Genre'
import Series from './Series'
function App() {
  return (
    <div>
       <BrowserRouter>       
        <Home/>
        <Route path="/movies" component={PopMovies} />
        <Route path="/series" component={Series} />
        <Route path="/genre" component={Genre} />        
      </BrowserRouter>     
      {/* Popular Movies Section */}
      <Container><Row className="inline-cards"><PopMovies/></Row></Container>
      <Footer/>
    </div>
  );
}

export default App;
