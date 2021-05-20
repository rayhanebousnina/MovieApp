import React from "react";
import { Row, Col, Card, Button, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import axios from "axios";

import "./App.css";

const Dashboard = ({ movie, setMovie }) => {

  function deleteMovie(e, id) {
    axios
      .delete(`http://localhost:3004/posts/${id}`)
      .then((res) => console.log("hhh tfasaa5"));
    // removeMovie() 
  }


// const removeMovie = (id) => {

// let index = movie.indexOf(id);
// movie.splice(index, 1);
// setMovie(movie);


// };


  return (
    <div>
      <Row>
        <Col md={2} className="sideBar">
            <Navbar>
                <Navbar.Brand href="#home">
                    <img className="logo" src="images/logo.png"></img>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/">Home</Link>                
                    <Link to="/series">Series</Link>
                    <Link to="/genres">Genre</Link>
                </Nav>
            </Navbar>
        </Col>
        <Col md={10}>
          <Row className="navBar d-flex justify-content-between">
            <p>Search Bar</p>
            {/* <img className="profile" src="/images/profile.jpg" alt="profile" /> */}
          </Row>
          <Row>
            <p>6245 Movies</p>
          </Row>
          <div className="mt-5">
            {movie.map((el) => (
              <Col md={3}>
                    <Card className="movie-card bg-dark text-white">
                        <Card.Img src={el.Poster} alt="Card image" />
                        <Card.ImgOverlay className="d-flex align-items-start justify-content-end">
                        <Card.Title>
                            <Button onClick={(e) => deleteMovie(e,el.id)}>
                            <i class="fas fa-heart fa-2x"></i>
                            </Button>
                        </Card.Title>
                        </Card.ImgOverlay>
                        <div className="p-3 body-card">
                        <h6>{el.Title}</h6>
                        <h6>{el.Year}</h6>
                        <Rater total={5} rating={el.Rating} interactive={false} />
                        </div>
                    </Card>
              </Col>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
