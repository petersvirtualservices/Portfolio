import './assets/css/App.css';
import 'react-mdl/extra/material.css';   
import 'react-mdl/extra/material.js';
import { Header, Navigation, Content } from 'react-mdl';
import { Component } from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import Main from './components/main';
class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="demo-big-content">
          <Header title="Charlene Peters Portfolio">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
      </div>
      </BrowserRouter>
    );
  }
}
export default App