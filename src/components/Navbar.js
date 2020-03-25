import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { PopUp } from './PopUp';


const Top = (props) => (

    <Navbar expand="lg" style={{ width: '100%' }}>
        <Navbar.Brand href="/" style={{ color: 'white' }}>Weather App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="https://fungt1.github.io/#" style={{ color: 'white' }}>My Website</Nav.Link>
                <PopUp />
            </Nav>
            <form onSubmit={props.getWeather}>
                <input type="text" name="city" placeholder="City..." />
                <input type="text" name="country" placeholder="Country..." />
                <button>Get Weather</button>
            </form>
        </Navbar.Collapse>
    </Navbar>
);

export default Top;