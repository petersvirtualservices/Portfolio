import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import img1 from '../assets/images/CocktailCoterie.PNG';
import img2 from '../assets/images/WeatherDashboard.png';
import img3 from '../assets/images/Webbie.PNG';
import img4 from '../assets/images/PasswordGenerator.PNG';

class Project extends Component {
  render() {
    return (
      <div>
        <br /><br />

        <Card>
          <Card.Img src={img1} />
          <Card.Body>
            <Card.Title>Cocktail Coterie</Card.Title>
            <Card.Text variant='dark'>
              We are all social butterflies feeling caged and suffering without the ability to visit with our friends and family during this pandemic. It was such a hassle to try to organize any online event and even harder to get our friends excited about it - this is when Cocktail_Coterie was born. The app takes all the info you need to make an invitation convenient for your virtual party guests to come hang out!!  This was a group project, and I was responsible for the registration and login.
            </Card.Text>
            <Button variant="secondary" src="https://github.com/AuroraBrune/cocktail_coterie">GitHub</Button>
            <Button variant="secondary" src="https://cocktail-coterie.herokuapp.com/">Live Demo</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img src={img3} />
          <Card.Body>
            <Card.Title>Timed Quiz</Card.Title>
            <Card.Text>
            This is a simple quiz to test your HTML and Javascript knowledge.  It was my first attempt at Javascript
            </Card.Text>
            <Button variant="secondary" src="https://github.com/petersvirtualservices/TimedQuiz">GitHub</Button>
            <Button variant="secondary" src="https://petersvirtualservices.github.io/TimedQuiz/">Live Demo</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img src={img2} />
          <Card.Body>
            <Card.Title>Weather API</Card.Title>
            <Card.Text>
            This is an app that is designed to show the weather and the 5-day forecast.  This was the first assignment that allowed me to feel comfortable with Javascript.
            </Card.Text>
            <Button variant="secondary" src="https://github.com/petersvirtualservices/WeatherAPI">GitHub</Button>
            <Button variant="secondary" src="https://petersvirtualservices.github.io/WeatherAPI/">Live Demo</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img src={img4} />
          <Card.Body>
            <Card.Title>Password Generator</Card.Title>
            <Card.Text>
            This is an app that is designed to show the weather and the 5-day forecast.  This was the first assignment that allowed me to feel comfortable with Javascript.
            </Card.Text>
            <Button variant="secondary" src="https://github.com/petersvirtualservices/PasswordCreator">GitHub</Button>
            <Button variant="secondary" src="https://petersvirtualservices.github.io/PasswordCreator/">Live Demo</Button>
          </Card.Body>
        </Card>
      </div>
    )
  };
}
export default Project;