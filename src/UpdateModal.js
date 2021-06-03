import React from 'react'

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
  import axios from "axios";
  import { useState } from "react";

const UpdateModal = ({id, movie}) => {

          // Modal State for editing a movie
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);


    // Update Movie Function
    const [updateInput, setUpdatedInput] = useState({
        Title: movie[id].Title,
        Year: movie[id].Year,
        Runtime: movie[id].Runtime,
        Genre: movie[id].Genre,
        Type: movie[id].Type,
        totalSeasons: movie[id].totalSeasons,
        Actors: movie[id].Actors,
        Plot: movie[id].Plot,
        Rating: movie[id].Rating,
        Language: movie[id].Language,
        Coutnry: movie[id].Country,
        Awards: movie[id].Awards,
        Poster: movie[id].Poster,
        imdbRating: movie[id].imdbRating,
        imdbVotes: movie[id].imdbVotes,
      });
    
      const handleChange2 = (e) => {
        const { name, value } = e.target;
        setUpdatedInput({
          ...updateInput,
          [name]: value,
        });
      };
  
      const editMovie = (id) => {
        axios
          .put(`https://test-124ae-default-rtdb.firebaseio.com/posts/${id}.json`, updateInput)
          .then((response) => setUpdatedInput(response.data))
          .catch((error) => console.log(error));
      };
  

  return(
    <div>
        <Button onClick={handleShow1}>
                    <i class="fas fa-edit"></i>
        </Button>
        {/* Edit Movie Modal */}
        <Modal show={show1} onHide={handleClose1}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {/* Movie Data */}
                      <Form>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Title"
                            aria-label="Title"
                            name="Title"
                            defaultValue={movie[id].Title}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Year"
                            aria-label="Year"
                            name="Year"
                            defaultValue={movie[id].Year}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Runtime"
                            aria-label="Runtime"
                            name="Runtime"
                            defaultValue={movie[id].Runtime}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Genre"
                            aria-label="Genre"
                            name="Genre"
                            defaultValue={movie[id].Genre}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Actors"
                            aria-label="Actors"
                            name="Actors"
                            defaultValue={movie[id].Actors}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Plot"
                            aria-label="Plot"
                            name="Plot"
                            defaultValue={movie[id].Plot}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Language"
                            aria-label="Language"
                            name="Language"
                            defaultValue={movie[id].Language}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Country"
                            aria-label="Country"
                            name="Country"
                            defaultValue={movie[id].Country}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Awards"
                            aria-label="Awards"
                            name="Awards"
                            defaultValue={movie[id].Awards}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Poster"
                            aria-label="Poster"
                            name="Poster"
                            defaultValue={movie[id].Poster}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Rating"
                            aria-label="Rating"
                            name="Rating"
                            defaultValue={movie[id].Rating}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="imdbRating"
                            aria-label="imdbRating"
                            name="imdbRating"
                            defaultValue={movie[id].imdbRating}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="imdbVotes"
                            aria-label="imdbVotes"
                            name="imdbVotes"
                            defaultValue={movie[id].imdbVotes}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Type"
                            aria-label="Type"
                            name="Type"
                            defaultValue={movie[id].Type}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="totalSeasons"
                            aria-label="totalSeasons"
                            name="totalSeasons"
                            defaultValue={movie[id].totalSeasons}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <Button onClick={() => editMovie(id)}>Update movie</Button>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose1}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose1}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
    </div>
   )

 }

export default UpdateModal