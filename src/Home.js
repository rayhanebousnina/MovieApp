import './App.css';
import Navigation from './Nav'

function Home() {
  return (
    <div>
        {/* NavigationBar and Cover Section */}
        <div className="cover">
          <Navigation/>
          <img className="btn-play" src="https://www.nicepng.com/png/full/621-6219971_featured-recorded-webinar-ville-de-saint-etienne.png"></img>
        </div>
    </div>
  );
}

export default Home;