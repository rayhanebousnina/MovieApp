import "./App.css";
import Navigation from "./Nav";
import { Card, Button, Row, Container } from "react-bootstrap";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import Footer from "./Footer";
import AdminMovie from "./AdminMovie";

function Series({
  favorite,
  movie,
  getFavorites,
  getFavoriteMovie,
  search,
  onSearch,
}) {
  return (
    <div>
      <div className="cover-Serie">
        <Navigation favorite={favorite} onSearch={onSearch} />
        <p className="cover-subtitle series-sub">
          Me Before You is a 2016 romantic drama film directed by Thea Sharrock
          in her directorial debut and adapted by English author Jojo Moyes from
          her 2012 novel ... <br/>
          Première sortie : 23 mai 2016 (New York)
        </p>
      </div>

      <Container className="mt-5 d-flex justify-content-around flex-wrap">
        {Object.keys(movie)
          .filter((el) => {
            if (
              (movie[el].Type === "serie" && search === "") ||
              (movie[el].Type === "serie" &&
                movie[el].Title.toLowerCase().includes(search.toLowerCase()))
            ) {
              return el;
            }
          })
          .map((el) => (
            <Row>
              <Card
                className="movie-card bg-dark text-white"
                style={{ width: "16rem" }}
              >
                <Card.Img src={movie[el].Poster} alt="Card image" />
                <Card.ImgOverlay className="d-flex align-items-start justify-content-end">
                  <Card.Title>
                    <Button
                      onClick={() => {
                        getFavorites();
                        getFavoriteMovie(el);
                      }}
                    >
                      <i class="fas fa-heart fa-2x"></i>
                    </Button>
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.ImgOverlay>
                <div className="p-3 body-card">
                  <h6>{movie[el].Title}</h6>
                  <h6>{movie[el].Year}</h6>
                  <Rater total={5} rating={movie[el].Rating} interactive={false} />
                </div>
              </Card>
            </Row>
          ))}
      </Container>
      <Footer />
    </div>
  );
}

export default Series;
