import React from 'react'
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Button,
  Modal,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";

import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import axios from "axios";
import { useState } from "react";
import UpdateModal from "./UpdateModal";



const AdminMovie = ({movie, setMovie, onSearch, search }) => {


      // Modal State for editing a movie
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);



    function deleteMovie(id) {
      axios
        .delete(`https://test-124ae-default-rtdb.firebaseio.com/posts/${id}.json`)
        .then((res) => console.log(res.data));
      // removeMovie()
    }
  
  
    // Modal State for adding a movie
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // Add Movie Function
    const [input, setInput] = useState({
     
      Title: "",
      Year: "",
      Runtime: "",
      Genre: "",
      Type: "",
      totalSeasons: "",
      Actors: "",
      Plot: "",
      Rating: "",
      Language: "",
      Coutnry: "",
      Awards: "",
      Poster: "",
      imdbRating: "",
      imdbVotes: "",
    });
    const handleChange = (e) => {
      const { name, value } = e.target;
      setInput({
        ...input,
        [name]: value,
        input: "",
      });
    };

  
    const addMovie = (e) => {
      e.preventDefault();
      console.log(input);
      axios
        .post(`https://test-124ae-default-rtdb.firebaseio.com/posts.json`, JSON.stringify(input))
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    };


    


  return(
    <div className="dark-edition">
        <div class="wrapper ">
    <div class="sidebar" data-color="purple" data-background-color="black" data-image="../assets/img/sidebar-2.jpg">
     
    
      <div class="logo"><a href="http://www.creative-tim.com" class="simple-text logo-normal">
          CinemaMates
        </a></div>
        <div class="sidebar-wrapper">
        <ul class="nav">
          <li class="nav-item ">
            <Link class="nav-link" to="/CinemaMates/dashboard">
              <i class="material-icons">dashboard</i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li class="nav-item ">
            <Link class="nav-link" to="/CinemaMates/profile">
              <i class="material-icons">person</i>
              <p>User Profile</p>
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/CinemaMates/adminmovies">
              <i class="material-icons">content_paste</i>
              <p>Movies List</p>
            </Link>
          </li>
          <li class="nav-item ">
            <Link class="nav-link" to="/CinemaMates/notifications">
              <i class="material-icons">notifications</i>
              <p>Notifications</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-panel">
     {/* Navbar */}
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top " id="navigation-example">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <a class="navbar-brand" href="javascript:void(0)">Table List</a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation" data-target="#navigation-example">
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end">
            <form class="navbar-form">
              <div class="input-group no-border">
                <input type="text" value="" class="form-control" placeholder="Search..."  onChange={onSearch}/>
                <button type="submit" class="btn btn-default btn-round btn-just-icon">
                  <i class="material-icons">search</i>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">
                  <i class="material-icons">dashboard</i>
                  <p class="d-lg-none d-md-block">
                    Stats
                  </p>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="javscript:void(0)" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="material-icons">notifications</i>
                  <span class="notification">5</span>
                  <p class="d-lg-none d-md-block">
                    Some Actions
                  </p>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="javascript:void(0)">Mike John responded to your email</a>
                  <a class="dropdown-item" href="javascript:void(0)">You have 5 new tasks</a>
                  <a class="dropdown-item" href="javascript:void(0)">You're now friend with Andrew</a>
                  <a class="dropdown-item" href="javascript:void(0)">Another Notification</a>
                  <a class="dropdown-item" href="javascript:void(0)">Another One</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">
                  <i class="material-icons">person</i>
                  <p class="d-lg-none d-md-block">
                    Account
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
      {/* Movie Cards */}
      <div class="content">
        {/* add Movie here */}
        
        <div className="d-flex justify-content-around mt-5">
            <p>6245 Movies</p>
            <Button onClick={handleShow} className="btn-signIn addMovies" variant="">
              Add movie
            </Button>

            {/* Add Movie Modal */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/* Movie Data */}
                <Form onSubmit={addMovie} method="post">
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Title"
                      aria-label="Title"
                      name="Title"
                      value={input.Title}
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Year"
                      aria-label="Year"
                      name="Year"
                      value={input.Year}
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Runtime"
                      aria-label="Runtime"
                      name="Runtime"
                      value={input.Runtime}
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Genre"
                      aria-label="Genre"
                      name="Genre"
                      value={input.Genre}
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Actors"
                      aria-label="Actors"
                      name="Actors"
                      value={input.Actors}
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Plot"
                      aria-label="Plot"
                      name="Plot"
                      value={input.Plot}
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Language"
                      aria-label="Language"
                      name="Language"
                      value={input.Language}
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Country"
                      aria-label="Country"
                      name="Country"
                      value={input.Country}
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Awards"
                      aria-label="Awards"
                      name="Awards"
                      value={input.Awards}
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Poster"
                      aria-label="Poster"
                      name="Poster"
                      value={input.Poster}
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Rating"
                      aria-label="Rating"
                      name="Rating"
                      value={input.Rating}
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="imdbRating"
                      aria-label="imdbRating"
                      name="imdbRating"
                      value={input.imdbRating}
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="imdbVotes"
                      aria-label="imdbVotes"
                      name="imdbVotes"
                      value={input.imdbVotes}
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Type"
                      aria-label="Type"
                      name="Type"
                      value={input.Type}
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="totalSeasons"
                      aria-label="totalSeasons"
                      name="totalSeasons"
                      value={input.totalSeasons}
                      aria-describedby="basic-addon1"
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <Button type="submit">Submit</Button>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
            {/* End Add Movie Modal */}
         <div className="mt-5 d-flex justify-content-around flex-wrap">
           {/*       movie.filter(el => 
        el.Title.toLowerCase().includes(search.toLowerCase())
     ).map(el =>  */}
          {Object.keys(movie).map((id) => (
              <Card
              key={id}
                className="movie-card text-white m-2"
                style={{ width: "16rem" }}
              >
                <Card.Img src={movie[id].Poster} alt="Card image" />
                <div className="p-3 body-card">
                  <h6>{movie[id].Title}</h6>
                  <h6>{movie[id].Year}</h6>
                  <Rater total={5} rating={movie[id].Rating} interactive={false} />
                  <Button onClick={() => deleteMovie(id)}>
                    <i class="fas fa-trash-alt"></i>
                  </Button>                  

                  <UpdateModal id={id} movie={movie}/>
                </div>
              </Card>
            ))}
          </div>
      </div>
      {/* End Movie Cards */}
      <footer class="footer">
        <div class="container-fluid">
          <nav class="float-left">
            <ul>
              <li>
                <a href="https://www.creative-tim.com">
                  Creative Tim
                </a>
              </li>
              <li>
                <a href="https://creative-tim.com/presentation">
                  About Us
                </a>
              </li>
              <li>
                <a href="http://blog.creative-tim.com">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://www.creative-tim.com/license">
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div class="copyright float-right" id="date">
            , made with <i class="material-icons">favorite</i> by
            <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a> for a better web.
          </div>
        </div>
      </footer>
    </div>
  </div>
  <div class="fixed-plugin">
    <div class="dropdown show-dropdown">
      <a href="#" data-toggle="dropdown">
        <i class="fa fa-cog fa-2x"> </i>
      </a>
      <ul class="dropdown-menu">
        <li class="header-title"> Sidebar Filters</li>
        <li class="adjustments-line">
          <a href="javascript:void(0)" class="switch-trigger active-color">
            <div class="badge-colors ml-auto mr-auto">
              <span class="badge filter badge-purple active" data-color="purple"></span>
              <span class="badge filter badge-azure" data-color="azure"></span>
              <span class="badge filter badge-green" data-color="green"></span>
              <span class="badge filter badge-warning" data-color="orange"></span>
              <span class="badge filter badge-danger" data-color="danger"></span>
            </div>
            <div class="clearfix"></div>
          </a>
        </li>
        <li class="header-title">Images</li>
        <li>
          <a class="img-holder switch-trigger" href="javascript:void(0)">
            <img src="../assets/img/sidebar-1.jpg" alt=""/>
          </a>
        </li>
        <li class="active">
          <a class="img-holder switch-trigger" href="javascript:void(0)">
            <img src="../assets/img/sidebar-2.jpg" alt=""/>
          </a>
        </li>
        <li>
          <a class="img-holder switch-trigger" href="javascript:void(0)">
            <img src="../assets/img/sidebar-3.jpg" alt=""/>
          </a>
        </li>
        <li>
          <a class="img-holder switch-trigger" href="javascript:void(0)">
            <img src="../assets/img/sidebar-4.jpg" alt=""/>
          </a>
        </li>
        <li class="button-container">
          <a href="https://www.creative-tim.com/product/material-dashboard-dark" target="_blank" class="btn btn-primary btn-block">Free Download</a>
        </li>
        <li class="button-container">
          <a href="https://demos.creative-tim.com/material-dashboard-dark/docs/2.0/getting-started/introduction.html" target="_blank" class="btn btn-default btn-block">
            View Documentation
          </a>
        </li>
        <li class="button-container github-star">
          <a class="github-button" href="https://github.com/creativetimofficial/material-dashboard/tree/dark-edition" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
        </li>
        <li class="header-title">Thank you for 95 shares!</li>
        <li class="button-container text-center">
          <button id="twitter" class="btn btn-round btn-twitter"><i class="fa fa-twitter"></i> &middot; 45</button>
          <button id="facebook" class="btn btn-round btn-facebook"><i class="fa fa-facebook-f"></i> &middot; 50</button>
          <br/>
          <br/>
        </li>
      </ul>
    </div>
  </div>
    </div>
   )

 }

export default AdminMovie