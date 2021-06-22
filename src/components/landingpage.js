import React, { Component} from 'react';
import Footer from './footer';
import {Container} from 'react-bootstrap';
import img from '../assets/images/SocialMediaPhoto.png';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                <br /> <br />
                <img src={img}/>
                <Footer />
                </Container>
            </div>
        )
    }
}

export default LandingPage