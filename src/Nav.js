import './App.css';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
        <Navbar bg="dark justify-content-around" variant="dark">
            <Navbar.Brand href="#home">
                <img className="logo" src="images/logo.png"></img>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/series">Series</Link>
                <Link to="/genre">Genre</Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button className="btn-search" variant="outline-info">Search</Button>
                <img className="img-fluid profile" src="images/profile.jpg"></img>
            </Form>
            
        </Navbar>
    </div>
  );
}

export default Navigation;