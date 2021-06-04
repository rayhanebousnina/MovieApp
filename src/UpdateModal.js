import React from 'react'

import {
    Button,
    Modal,
    InputGroup,
    FormControl,
    Form,
  } from "react-bootstrap";
  import axios from "axios";
  import { useState } from "react";

const UpdateModal = ({cle, movie}) => {

  // Reload pages
const reload = () => {
  window.location.reload();
}

          // Modal State for editing a movie
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);


    // Update Movie Function
    const [updateInput, setUpdatedInput] = useState({
        Title: movie[cle].Title,
        Year: movie[cle].Year,
        Runtime: movie[cle].Runtime,
        Genre: movie[cle].Genre,
        Type: movie[cle].Type,
        totalSeasons: movie[cle].totalSeasons,
        Actors: movie[cle].Actors,
        Plot: movie[cle].Plot,
        Rating: movie[cle].Rating,
        Language: movie[cle].Language,
        Coutnry: movie[cle].Country,
        Awards: movie[cle].Awards,
        Poster: movie[cle].Poster,
        imdbRating: movie[cle].imdbRating,
        imdbVotes: movie[cle].imdbVotes,
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
          .then(res=>reload())
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
                            defaultValue={movie[cle].Title}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Year"
                            aria-label="Year"
                            name="Year"
                            defaultValue={movie[cle].Year}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Runtime"
                            aria-label="Runtime"
                            name="Runtime"
                            defaultValue={movie[cle].Runtime}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Genre"
                            aria-label="Genre"
                            name="Genre"
                            defaultValue={movie[cle].Genre}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Actors"
                            aria-label="Actors"
                            name="Actors"
                            defaultValue={movie[cle].Actors}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Plot"
                            aria-label="Plot"
                            name="Plot"
                            defaultValue={movie[cle].Plot}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Language"
                            aria-label="Language"
                            name="Language"
                            defaultValue={movie[cle].Language}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Country"
                            aria-label="Country"
                            name="Country"
                            defaultValue={movie[cle].Country}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Awards"
                            aria-label="Awards"
                            name="Awards"
                            defaultValue={movie[cle].Awards}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Poster"
                            aria-label="Poster"
                            name="Poster"
                            defaultValue={movie[cle].Poster}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Rating"
                            aria-label="Rating"
                            name="Rating"
                            defaultValue={movie[cle].Rating}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="imdbRating"
                            aria-label="imdbRating"
                            name="imdbRating"
                            defaultValue={movie[cle].imdbRating}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="imdbVotes"
                            aria-label="imdbVotes"
                            name="imdbVotes"
                            defaultValue={movie[cle].imdbVotes}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Type"
                            aria-label="Type"
                            name="Type"
                            defaultValue={movie[cle].Type}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="totalSeasons"
                            aria-label="totalSeasons"
                            name="totalSeasons"
                            defaultValue={movie[cle].totalSeasons}
                            aria-describedby="basic-addon1"
                            onChange={handleChange2}
                          />
                        </InputGroup>
                      </Form>
                      <Button onClick={() => editMovie(cle)}>Update movie</Button>
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