import React from "react";
import Navigation from "./Nav";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import "./App.css";
import Footer from "./Footer";



const Favorite = ({
  favorite,
  favoriteMovie,
  removeFavoriteMovie,
  removeAll,
}) => {
  return (
    <div>
      <div className="cover-favorite">
        <Navigation favorite={favorite} />
        <h1 className="title-favorite">Favorite movies</h1>
      </div>

      {Object.values(favoriteMovie).map((el) => (
        <div className="mt-5">
    

          {/* redoing Cards */}

          <Container>
            <Row>
              <Col md={4} xs={12}>
                <Card.Img src={el.Poster} alt="Card image" />
              </Col>
              <Col md={6} xs={12}>
                <div className="p-3 body-card">
                  <h3>{el.Title}</h3>
                  <h6>{el.Year}</h6>
                  <Rater total={5} rating={el.Rating} interactive={false} />
                </div>
              </Col>
              <Col md={2} xs={12}>
                <Button
                  className="btn-remove"
                  onClick={() => {
                    removeFavoriteMovie(el);
                  }}
                >
                  Remove from favorites
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      ))}

      <div className="d-flex justify-content-center my-5">
        <Button
          className="btn-remove"
          onClick={() => {
            removeAll();
          }}
        >
          Remove All
        </Button>
      </div>
     <Footer/>
    </div>
  );
};

export default Favorite;
