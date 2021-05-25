import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Favorite from "./Favorite";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Genre from "./Genre";
import Series from "./Series";
import Movies from "./Movies";
import axios from "axios";
import AdminDash from "./AdminDashboard";
import UserProfileAdmin from "./UserProfileAdmin";
import AdminMovie from "./AdminMovie";
import AdminNotification from "./AdminNotification";



function App() {
  // UseState movie declaration
  const [movie, setMovie] = useState([]);
  // const h = fireBase().database().ref("https://test-124ae-default-rtdb.firebaseio.com/posts")

  // Fetch movies and add it to my state ***
  const getMovie = () => {
    axios
      .get("http://localhost:3001/posts")
      .then((response) => setMovie(response.data));
  };

  useEffect(() => {
    getMovie();
  }, []);

  // UseState search : It stores the input of search
  const [search, setSearch] = useState("");
  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  // UseState favorite : It is the array that stores the favorites item’s numbers.
  const [favorite, setFavorite] = useState(0);
  const getFavorites = () => {
    setFavorite(favorite + 1);
  };
  // UseState for adding favorite movies
  const [favoriteMovie, setFavoriteMovie] = useState([]);
  const getFavoriteMovie = (el) => {
    // const found = favoriteMovie.find(element => element.id !== el.id);
    // favoriteMovie.filter(e => e.id !== el.id)
    //favoriteValue.push(element)
    setFavoriteMovie((favoriteMovie) => [...favoriteMovie, el]);
  };

  const removeFavoriteMovie = (el) => {
    // favoriteMovie.splice(favoriteMovie.indexOf(el),1)
    // setFavoriteMovie(favoriteMovie)

    let index = favoriteMovie.indexOf(el);
    favoriteMovie.splice(index, 1);
    setFavoriteMovie(favoriteMovie);

    // let index = favoriteMovie.indexOf(el)
    // delete favoriteMovie[index]

    setFavorite(favorite - 1);
  };
  const removeAll = () => {
    // setFavoriteMovie(favoriteMovie => [])
    favoriteMovie.splice(0, favoriteMovie.length);
    setFavorite((favorite) => 0);
  };
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/CinemaMates">
          <Home
            search={search}
            onSearch={onSearch}
            movie={movie}
            favorite={favorite}
            getFavorites={getFavorites}
            favoriteMovie={favoriteMovie}
            getFavoriteMovie={getFavoriteMovie}
          />
        </Route>
        <Route path="/CinemaMates/series">
          <Series
            favorite={favorite}
            movie={movie}
            search={search}
            onSearch={onSearch}
            getFavoriteMovie={getFavoriteMovie}
            getFavorites={getFavorites}
          />
        </Route>
        <Route path="/CinemaMates/movies">
          <Movies
            favorite={favorite}
            movie={movie}
            search={search}
            onSearch={onSearch}
            getFavoriteMovie={getFavoriteMovie}
            getFavorites={getFavorites}
          />
        </Route>
        <Route path="/CinemaMates/genres">
          {" "}
          <Genre favorite={favorite} />{" "}
        </Route>
        <Route path="/CinemaMates/favorites">
          <Favorite
            favorite={favorite}
            favoriteMovie={favoriteMovie}
            removeFavoriteMovie={removeFavoriteMovie}
            removeAll={removeAll}
          />
        </Route>
        <Route exact path="/CinemaMates/dashboard">
          <AdminDash movie={movie} setMovie={setMovie} />
        </Route>
        <Route path="/CinemaMates/profile">
          <UserProfileAdmin movie={movie} setMovie={setMovie} />
        </Route>
        <Route path="/CinemaMates/adminmovies">
          <AdminMovie movie={movie} setMovie={setMovie} />
        </Route>
        <Route path="/CinemaMates/notifications">
          <AdminNotification movie={movie} setMovie={setMovie} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
