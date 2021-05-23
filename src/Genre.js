import './App.css';
import Navigation from './Nav'
import Footer from './Footer'

function Genre({favorite}) {
  return (
    <div>      
      <div className="cover-Genre">
          
          <Navigation favorite={favorite}/>
          <h1 className="title-favorite">Genres</h1>
      </div> 
      <Footer/>
    </div>
  );
}

export default Genre;