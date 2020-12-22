import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Footer from './footer';
import img from '../assets/images/SocialMediaPhoto.png';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img 
                    src={img} 
                    href="/main"
                    alt="Image1" 
                    className="Image1"/>                      
                    </Cell>
                </Grid>
                <Footer />
            </div>
        )
    }
}

export default LandingPage