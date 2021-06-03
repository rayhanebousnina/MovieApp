import './App.css';
import {Navbar, Nav, Form, FormControl, Button, Modal, InputGroup} from 'react-bootstrap'
import { Link } from "react-router-dom";
import {useState} from 'react'



    const Navigation = ({search, onSearch, favorite}) => {

        // SignIn Modal State
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);


  return (

    
    <div>
        <Navbar className="navbar-shadow" bg="dark justify-content-around" variant="dark">
            <Navbar.Brand href="/CinemaMates">
                <img className="logo" src="images/logo.png"></img>
            </Navbar.Brand>
            <Nav className="">
                <Link to="/CinemaMates">Home</Link>                
                <Link to="/CinemaMates/series">Series</Link>
                <Link to="/CinemaMates/genres">Genre</Link>
                <Link to="/CinemaMates/favorites">Favorites <span className="badge-favorite">{favorite}</span></Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={onSearch}/>
                {/* SignIn Button */}
                <Button className="btn-signIn" variant="primary" onClick={handleShow}>
                    Sign In
                </Button>
                {/* SignIn Model */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InputGroup className="mb-3">  
                        <i class="fas fa-user-circle fa-2x"></i>                          
                            <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                        <i class="fas fa-lock fa-2x"></i>
                            <FormControl
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        Don't have an account ? 
                        <a href="" onClick={handleShow}> Sign Up </a>
                        <a href=""> Forgot your password ? </a>
                    <Button className="btn-signIn" variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button className="btn-signIn" variant="primary" onClick={handleClose}>
                        Login
                    </Button>
                    </Modal.Footer>
                </Modal>
                
            </Form>
            
        </Navbar>
    </div>
  );
}


export default Navigation;