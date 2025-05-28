import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const AppNavbar = () => {
  return (
    <div>
      <Navbar className='bg-[#1A404E] navbar-home' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="home">codemindlearning.com</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="html">Html</Nav.Link>
            <Nav.Link href="css">Css</Nav.Link>
            <Nav.Link href="javascript">JavaScript</Nav.Link>
            <Nav.Link href="angular">Angular</Nav.Link>
            <Nav.Link href="react">React js</Nav.Link>
            <Nav.Link href="/html" className='nav-btn rounded-full bg-[#eb9b27]'>START LEARNING</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default AppNavbar;
