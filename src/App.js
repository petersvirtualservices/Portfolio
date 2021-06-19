import './assets/css/App.css';
import { Container, Navbar, Nav} from 'react-bootstrap';
import { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Main from './components/main';



class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="demo-big-content">
      <Container>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/landingpage">Charlene Peters Portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/landingpage">Home</Nav.Link>
      <Nav.Link href="/aboutme">About Me</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/contact">Contact Me</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            <div className="page-content" />
            <Main />
          </Container>
      </div>
      </BrowserRouter>
    );
  }
}
export default App