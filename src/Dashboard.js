// import React from "react";
// import {
//   Row,
//   Col,
//   Card,
//   Button,
//   Modal,
//   InputGroup,
//   FormControl,
//   Form,
// } from "react-bootstrap";
// import Rater from "react-rater";
// import "react-rater/lib/react-rater.css";
// import axios from "axios";
// import { useState } from "react";
// import "./dashboard.css";
// import NavDashboard from "./NavbarDashboard"

// const Dashboard = ({movie, setMovie}) => {
//   function deleteMovie(e, id) {
//     axios
//       .delete(`http://localhost:3001/posts/${id}`)
//       .then((res) => console.log("hhh tfasaa5"));
//     // removeMovie()
//   }

//   // const removeMovie = (id) => {

//   // let index = movie.indexOf(id);
//   // movie.splice(index, 1);
//   // setMovie(movie);

//   // };

//   // Modal State for adding a movie
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   // Add Movie Function
//   const [input, setInput] = useState({
//     Title: "",
//     Year: "",
//     Runtime: "",
//     Genre: "",
//     Type: "",
//     totalSeasons: "",
//     Actors: "",
//     Plot: "",
//     Rating: "",
//     Language: "",
//     Coutnry: "",
//     Awards: "",
//     Poster: "",
//     imdbRating: "",
//     imdbVotes: "",
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInput({
//       ...input,
//       [name]: value,
//       input: "",
//     });
//   };

//   const addMovie = (e) => {
//     e.preventDefault();
//     console.log(input);
//     axios
//       .post("http://localhost:3001/posts", input)
//       .then((response) => console.log(response))
//       .catch((error) => console.log(error));
//   };


//   // Modal State for editing a movie
//   const [show1, setShow1] = useState(false);

//   const handleClose1 = () => setShow1(false);
//   const handleShow1 = () => setShow1(true);


//   const editMovie = (e, id) => {
//     e.preventDefault();
//     console.log(input);
//     axios
//       .put(`http://localhost:3001/posts/${id}`, input)
//       .then((response) => setMovie({ updatedAt: response.updatedAt }))
//       .catch((error) => console.log(error));
//   };


//   return (
//     <div>
//       <Row>
//         <Col md={2}>
//         <NavDashboard/>
//         </Col>
//         <Col md={10} className="content">
//           <Row className="navBar">
//             <p>Search Bar</p>
//             {/* <img className="profile" src="/images/profile.jpg" alt="profile" /> */}
//           </Row>
        //   <div className="d-flex justify-content-around mt-5">
        //     <p>6245 Movies</p>
        //     <Button onClick={handleShow} className="btn-signIn addMovies" variant="">
        //       Add movie
        //     </Button>

        //     {/* Add Movie Modal */}
        //     <Modal show={show} onHide={handleClose}>
        //       <Modal.Header closeButton>
        //         <Modal.Title>Modal heading</Modal.Title>
        //       </Modal.Header>
        //       <Modal.Body>
        //         {/* Movie Data */}
        //         <Form onSubmit={addMovie} method="post">
        //           <InputGroup className="mb-3">
        //             <FormControl
        //               placeholder="Title"
        //               aria-label="Title"
        //               name="Title"
        //               value={input.Title}
        //               aria-describedby="basic-addon1"
        //               onChange={handleChange}
        //             />
        //           </InputGroup>
        //           <InputGroup className="mb-3">
        //             <FormControl
        //               placeholder="Year"
        //               aria-label="Year"
        //               name="Year"
        //               value={input.Year}
        //               aria-describedby="basic-addon1"
        //               onChange={handleChange}
        //             />
        //           </InputGroup>
        //           <InputGroup className="mb-3">
        //             <FormControl
        //               placeholder="Runtime"
        //               aria-label="Runtime"
        //               name="Runtime"
        //               value={input.Runtime}
        //               aria-describedby="basic-addon1"
        //               onChange={handleChange}
        //             />
        //           </InputGroup>
        //           <InputGroup className="mb-3">
        //             <FormControl
        //               placeholder="Genre"
        //               aria-label="Genre"
        //               name="Genre"
        //               value={input.Genre}
        //               aria-describedby="basic-addon1"
        //               onChange={handleChange}
        //             />
        //           </InputGroup>
        //           <InputGroup className="mb-3">
        //             <FormControl
        //               placeholder="Actors"
        //               aria-label="Actors"
        //               name="Actors"
        //               value={input.Actors}
        //               aria-describedby="basic-addon1"
        //               onChange={handleChange}
        //             />
        //           </InputGroup>
        //           <InputGroup className="mb-3">
        //             <FormControl
        //               placeholder="Plot"
        //               aria-label="Plot"
        //               name="Plot"
        //               value={input.Plot}
        //               aria-describedby="basic-addon1"
        //               onChange={handleChange}
        //             />
        //           </InputGroup>
        //           <InputGroup className="mb-3">
        //             <FormControl
        //               placeholder="Language"
        //               aria-label="Language"
        //               name="Language"
        //               value={input.Language}
        //               aria-describedby="basic-addon1"
        //               onChange={handleChange}
        //             />
        //           </InputGroup>
        //           <InputGroup className="mb-3">
        //             <FormControl
        //               placeholder="Country"
        //               aria-label="Country"
        //               name="Country"
        //               value={input.Country}
        //               aria-describedby="basic-addon1"
        //               onChange={handleChange}
        //             />
        //           </InputGroup>
        //           <InputGroup className="mb-3">
        //             <FormControl
        //               placeholder="Awards"
        //               aria-label="Awards"
        //               name="Awards"
        //               value={input.Awards}
        //               aria-describedby="basic-addon1"
        //               onChange={handleChange}
        //             />
        //           </InputGroup>
        //           <InputGroup className="mb-3">
        //             <FormControl
        //               placeholder="Poster"
        //               aria-label="Poster"
        //               name="Poster"
        //               value={input.Poster}
        //               aria-describedby="basic-addon1"
        //               onChange={handleChange}
        //             />
        //           </InputGroup>
        //           <InputGroup className="mb-3">
        //             <FormControl
        //               placeholder="Rating"
        //               aria-label="Rating"
        //               name="Rating"
        //               value={input.Rating}
        //               aria-describedby="basic-addon1"
        //               onChange={handleChange}
        //             />
        //           </InputGroup>
        //           <InputGroup className="mb-3">
        //             <FormControl
        //               placeholder="imdbRating"
        //               aria-label="imdbRating"
        //               name="imdbRating"
        //               value={input.imdbRating}
        //               aria-describedby="basic-addon1"
        //               onChange={handleChange}
        //             />
        //           </InputGroup>
        //           <InputGroup className="mb-3">
        //             <FormControl
        //               placeholder="imdbVotes"
        //               aria-label="imdbVotes"
        //               name="imdbVotes"
        //               value={input.imdbVotes}
        //               aria-describedby="basic-addon1"
        //               onChange={handleChange}
        //             />
        //           </InputGroup>
        //           <InputGroup className="mb-3">
        //             <FormControl
        //               placeholder="Type"
        //               aria-label="Type"
        //               name="Type"
        //               value={input.Type}
        //               aria-describedby="basic-addon1"
        //               onChange={handleChange}
        //             />
        //           </InputGroup>
        //           <InputGroup className="mb-3">
        //             <FormControl
        //               placeholder="totalSeasons"
        //               aria-label="totalSeasons"
        //               name="totalSeasons"
        //               value={input.totalSeasons}
        //               aria-describedby="basic-addon1"
        //               onChange={handleChange}
        //             />
        //           </InputGroup>
        //           <Button type="submit">Submit</Button>
        //         </Form>
        //       </Modal.Body>
        //       <Modal.Footer>
        //         <Button variant="secondary" onClick={handleClose}>
        //           Close
        //         </Button>
        //         <Button variant="primary" onClick={handleClose}>
        //           Save Changes
        //         </Button>
        //       </Modal.Footer>
        //     </Modal>
        //   </div>

//           <div className="mt-5 d-flex justify-content-around flex-wrap">
//             {movie.map((el) => (
//               <Card
//                 className="movie-card text-white m-2"
//                 style={{ width: "16rem" }}
//               >
//                 <Card.Img src={el.Poster} alt="Card image" />
//                 <div className="p-3 body-card">
//                   <h6>{el.Title}</h6>
//                   <h6>{el.Year}</h6>
//                   <Rater total={5} rating={el.Rating} interactive={false} />
//                   <Button onClick={(e) => deleteMovie(e, el.id)}>
//                     <i class="fas fa-trash-alt"></i>
//                   </Button>
//                   <Button onClick={handleShow1}>
//                     <i class="fas fa-edit"></i>
//                   </Button>

//                   {/* Edit Movie Modal */}
//                   <Modal show={show1} onHide={handleClose1}>
//                     <Modal.Header closeButton>
//                       <Modal.Title>Modal heading</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                       {/* Movie Data */}
//                       <Form onClick={editMovie} method="post">
//                         <InputGroup className="mb-3">
//                           <FormControl
//                             placeholder="Title"
//                             aria-label="Title"
//                             name="Title"
//                             defaultValue={el.Title}
//                             aria-describedby="basic-addon1"
//                             onChange={handleChange}
//                           />
//                         </InputGroup>
//                         <InputGroup className="mb-3">
//                           <FormControl
//                             placeholder="Year"
//                             aria-label="Year"
//                             name="Year"
//                             defaultValue={el.Year}
//                             aria-describedby="basic-addon1"
//                             onChange={handleChange}
//                           />
//                         </InputGroup>
//                         <InputGroup className="mb-3">
//                           <FormControl
//                             placeholder="Runtime"
//                             aria-label="Runtime"
//                             name="Runtime"
//                             defaultValue={el.Runtime}
//                             aria-describedby="basic-addon1"
//                             onChange={handleChange}
//                           />
//                         </InputGroup>
//                         <InputGroup className="mb-3">
//                           <FormControl
//                             placeholder="Genre"
//                             aria-label="Genre"
//                             name="Genre"
//                             defaultValue={el.Genre}
//                             aria-describedby="basic-addon1"
//                             onChange={handleChange}
//                           />
//                         </InputGroup>
//                         <InputGroup className="mb-3">
//                           <FormControl
//                             placeholder="Actors"
//                             aria-label="Actors"
//                             name="Actors"
//                             defaultValue={el.Actors}
//                             aria-describedby="basic-addon1"
//                             onChange={handleChange}
//                           />
//                         </InputGroup>
//                         <InputGroup className="mb-3">
//                           <FormControl
//                             placeholder="Plot"
//                             aria-label="Plot"
//                             name="Plot"
//                             defaultValue={el.Plot}
//                             aria-describedby="basic-addon1"
//                             onChange={handleChange}
//                           />
//                         </InputGroup>
//                         <InputGroup className="mb-3">
//                           <FormControl
//                             placeholder="Language"
//                             aria-label="Language"
//                             name="Language"
//                             defaultValue={el.Language}
//                             aria-describedby="basic-addon1"
//                             onChange={handleChange}
//                           />
//                         </InputGroup>
//                         <InputGroup className="mb-3">
//                           <FormControl
//                             placeholder="Country"
//                             aria-label="Country"
//                             name="Country"
//                             defaultValue={el.Country}
//                             aria-describedby="basic-addon1"
//                             onChange={handleChange}
//                           />
//                         </InputGroup>
//                         <InputGroup className="mb-3">
//                           <FormControl
//                             placeholder="Awards"
//                             aria-label="Awards"
//                             name="Awards"
//                             defaultValue={el.Awards}
//                             aria-describedby="basic-addon1"
//                             onChange={handleChange}
//                           />
//                         </InputGroup>
//                         <InputGroup className="mb-3">
//                           <FormControl
//                             placeholder="Poster"
//                             aria-label="Poster"
//                             name="Poster"
//                             defaultValue={el.Poster}
//                             aria-describedby="basic-addon1"
//                             onChange={handleChange}
//                           />
//                         </InputGroup>
//                         <InputGroup className="mb-3">
//                           <FormControl
//                             placeholder="Rating"
//                             aria-label="Rating"
//                             name="Rating"
//                             defaultValue={el.Rating}
//                             aria-describedby="basic-addon1"
//                             onChange={handleChange}
//                           />
//                         </InputGroup>
//                         <InputGroup className="mb-3">
//                           <FormControl
//                             placeholder="imdbRating"
//                             aria-label="imdbRating"
//                             name="imdbRating"
//                             defaultValue={el.imdbRating}
//                             aria-describedby="basic-addon1"
//                             onChange={handleChange}
//                           />
//                         </InputGroup>
//                         <InputGroup className="mb-3">
//                           <FormControl
//                             placeholder="imdbVotes"
//                             aria-label="imdbVotes"
//                             name="imdbVotes"
//                             defaultValue={el.imdbVotes}
//                             aria-describedby="basic-addon1"
//                             onChange={handleChange}
//                           />
//                         </InputGroup>
//                         <InputGroup className="mb-3">
//                           <FormControl
//                             placeholder="Type"
//                             aria-label="Type"
//                             name="Type"
//                             defaultValue={el.Type}
//                             aria-describedby="basic-addon1"
//                             onChange={handleChange}
//                           />
//                         </InputGroup>
//                         <InputGroup className="mb-3">
//                           <FormControl
//                             placeholder="totalSeasons"
//                             aria-label="totalSeasons"
//                             name="totalSeasons"
//                             defaultValue={el.totalSeasons}
//                             aria-describedby="basic-addon1"
//                             onChange={handleChange}
//                           />
//                         </InputGroup>
//                         <Button type="submit">Submit</Button>
//                       </Form>
//                     </Modal.Body>
//                     <Modal.Footer>
//                       <Button variant="secondary" onClick={handleClose1}>
//                         Close
//                       </Button>
//                       <Button variant="primary" onClick={handleClose1}>
//                         Save Changes
//                       </Button>
//                     </Modal.Footer>
//                   </Modal>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Dashboard;
