import React from 'react';
import LandingPage from './landingpage'
import {Switch, Route} from 'react-router-dom';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import img from '../assets/images/SocialMediaPhoto.png';
import Image from 'react-bootstrap/Image';

const Main = () => (
    <Switch>
        <Route exact path="/landingpage" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Image src={img} />
    </Switch>
)

export default Main
