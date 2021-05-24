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

const UpdateModal = ({el}) => {

          // Modal State for editing a movie
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);


    // Update Movie Function
    const [updateInput, setUpdatedInput] = useState({
        Title: el.Title,
        Year: el.Year,
        Runtime: el.Runtime,
        Genre: el.Genre,
        Type: el.Type,
        totalSeasons: el.totalSeasons,
        Actors: el.Actors,
        Plot: el.Plot,
        Rating: el.Rating,
        Language: el.Language,
        Coutnry: el.Country,
        Awards: el.Awards,
        Poster: el.Poster,
        imdbRating: el.imdbRating,
        imdbVotes: el.imdbVotes,
      });
    
      const handleChange2 = (e) => {
        const { name, value } = e.target;
        setUpdatedInput({
          ...updateInput,
          [name]: value,
        });
      };
  
      const editMovie = (e, id) => {
        e.preventDefault();
        console.log(updateInput);
        axios
          .put(`http://localhost:3001/posts/${id}`, updateInput)
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
                      <Form onClick={editMovie} method="post">
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Title"
                            aria-label="Title"
                            name="Title"
                            defaultValue={el.Title}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Year"
                            aria-label="Year"
                            name="Year"
                            defaultValue={el.Year}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Runtime"
                            aria-label="Runtime"
                            name="Runtime"
                            defaultValue={el.Runtime}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Genre"
                            aria-label="Genre"
                            name="Genre"
                            defaultValue={el.Genre}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Actors"
                            aria-label="Actors"
                            name="Actors"
                            defaultValue={el.Actors}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Plot"
                            aria-label="Plot"
                            name="Plot"
                            defaultValue={el.Plot}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Language"
                            aria-label="Language"
                            name="Language"
                            defaultValue={el.Language}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Country"
                            aria-label="Country"
                            name="Country"
                            defaultValue={el.Country}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Awards"
                            aria-label="Awards"
                            name="Awards"
                            defaultValue={el.Awards}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Poster"
                            aria-label="Poster"
                            name="Poster"
                            defaultValue={el.Poster}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Rating"
                            aria-label="Rating"
                            name="Rating"
                            defaultValue={el.Rating}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="imdbRating"
                            aria-label="imdbRating"
                            name="imdbRating"
                            defaultValue={el.imdbRating}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="imdbVotes"
                            aria-label="imdbVotes"
                            name="imdbVotes"
                            defaultValue={el.imdbVotes}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Type"
                            aria-label="Type"
                            name="Type"
                            defaultValue={el.Type}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="totalSeasons"
                            aria-label="totalSeasons"
                            name="totalSeasons"
                            defaultValue={el.totalSeasons}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <Button type="submit" onClick={(e) => editMovie(e,el.id)}>Update movie</Button>
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