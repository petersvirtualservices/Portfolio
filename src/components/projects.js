import React, { Component } from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap';
import img1 from '../assets/images/CocktailCoterie.PNG';
import img2 from '../assets/images/WeatherDashboard.png';
import img3 from '../assets/images/Webbie.PNG';
import img4 from '../assets/images/PasswordGenerator.PNG';

class Project extends Component {
  render() {
    return (
      <div>
        <br /><br />
<CardDeck>
        <Card>
          <Card.Img className='projectImg' src={img1} />
          <Card.Body>
            <Card.Title className='projectText'>Cocktail Coterie</Card.Title>
            <Button variant="secondary" src="https://github.com/AuroraBrune/cocktail_coterie">GitHub</Button>
            <Button variant="secondary" src="https://cocktail-coterie.herokuapp.com/">Live Demo</Button>
            <Card.Text variant='dark'>
              The app takes all the info you need to make an invitation convenient for your virtual party guests to come hang out!!  This was a group project, and I was responsible for the registration and login.
            </Card.Text>

          </Card.Body>
        </Card>
        <Card>
          <Card.Img className='projectImg' src={img3} />
          <Card.Body>
          <Card.Title className='projectText'>Timed Quiz</Card.Title>
          <Button variant="secondary" src="https://github.com/petersvirtualservices/TimedQuiz">GitHub</Button>
            <Button variant="secondary" src="https://petersvirtualservices.github.io/TimedQuiz/">Live Demo</Button>            
            <Card.Text>
            This is a simple quiz to test your HTML and Javascript knowledge.  It was my first attempt at Javascript
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img className='projectImg' src={img2} />
          <Card.Body>
            <Card.Title className='projectText'>Weather API</Card.Title>
            <Button variant="secondary" src="https://github.com/petersvirtualservices/WeatherAPI">GitHub</Button>
            <Button variant="secondary" src="https://petersvirtualservices.github.io/WeatherAPI/">Live Demo</Button>
            <Card.Text>
            This is an app that is designed to show the weather and the 5-day forecast.  This was the first assignment that allowed me to feel comfortable with Javascript.
            </Card.Text>

          </Card.Body>
        </Card>
        <Card>
          <Card.Img className='projectImg' src={img4} />
          <Card.Body>
            <Card.Title className='projectText'>Password Generator</Card.Title>
            <Button variant="secondary" src="https://github.com/petersvirtualservices/PasswordCreator">GitHub</Button>
            <Button variant="secondary" src="https://petersvirtualservices.github.io/PasswordCreator/">Live Demo</Button>
            <Card.Text>
            This is an app that is designed to show the weather and the 5-day forecast.  This was the first assignment that allowed me to feel comfortable with Javascript.
            </Card.Text>

          </Card.Body>
        </Card>
        </CardDeck>
      </div>
    )
  };
}
export default Project;