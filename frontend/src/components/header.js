import React,{Component} from 'react';
import {Navbar,NavDropdown,Form,FormControl,Nav,Button} from 'react-bootstrap';

class Nav1 extends Component{

    render(){return(
                <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">QUERY</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="/queryform">SubmitQuery</Nav.Link>
                <Nav.Link href="/querylist">QueryList</Nav.Link>
                <NavDropdown title="Account" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Register</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                
                </Form>
            </Navbar.Collapse>
            </Navbar>

    )}
}

export default Nav1