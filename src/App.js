import './assets/css/App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Component } from 'react';
import {Router, Link} from 'react-router-dom';
import Main from './components/main';
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="demo-big-content">
        <Layout>
          <Header title="Charlene Peters Portfolio">
            <Navigation>
              <Router>
              <Link to="/">Home</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              </Router>
            </Navigation>
          </Header>
          <Drawer title="Find Your Path">
            <Navigation>
            <Router>
            <Link to="/">Home</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              </Router>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
      </BrowserRouter>
    );
  }
}

export default App