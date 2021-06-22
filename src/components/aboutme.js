import React, { Component } from 'react';
import Footer from './footer';

class AboutMe extends Component {
    render() {
        return (
            <div>
                <h1>About Me Page</h1>
                <h3>Passions</h3>

                <p>Everyone can have a positive cumulation of moments if their mind codes for it.  With a certificate in Full-Stack Web Development that focuses on Javascript, React, and NodeJs from Kansas University and a Bachelors of Arts in Psychology from Wichita State University, I believe that I can help those who cannot see that moment within themselves by creating virtual-reality simulations to improve their social skills to take advantage of those moments.
                </p>
                <p>My business, Peters Virtual Services, started with small customer-audit jobs, and has grown to become a Top-Rated-Plus account on Upwork.  That result is because I have had great clients and they have had reason to trust me with their work.  I want to help others find a similar path.  Quite honestly, I understand that the mind is a very complex puzzle, but if I can put 5 pieces of a 1000-piece puzzle together, have I not made a contribution?
                </p>
                <p>Thank you for visiting my page!</p>
                <Footer />
            </div>
        )
    }
}

export default AboutMe