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
            <Card.Text variant='dark'>
            <a href="https://github.com/AuroraBrune/cocktail_coterie">GitHub</a> | <a href="https://cocktail-coterie.herokuapp.com/">Demo</a>
            </Card.Text>

          </Card.Body>
        </Card>
        <Card>
          <Card.Img className='projectImg' src={img3} />
          <Card.Body>
          <Card.Title className='projectText'>Timed Quiz</Card.Title>                  
            <Card.Text>
            <a href="https://github.com/petersvirtualservices/TimedQuiz">GitHub</a> | <a href="https://petersvirtualservices.github.io/TimedQuiz/">Demo</a>    
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img className='projectImg' src={img2} />
          <Card.Body>
            <Card.Title className='projectText'>Weather API</Card.Title>
            
            <Card.Text>
            <a href="https://github.com/petersvirtualservices/WeatherAPI">GitHub</a> | <a href="https://petersvirtualservices.github.io/WeatherAPI/">Demo</a>
             </Card.Text>

          </Card.Body>
        </Card>
        <Card>
          <Card.Img className='projectImg' src={img4} />
          <Card.Body>
            <Card.Title className='projectText'>Password Generator</Card.Title>            
            <Card.Text>
            <a href="https://github.com/petersvirtualservices/PasswordCreator">GitHub</a> | <a href="https://petersvirtualservices.github.io/PasswordCreator/">Demo</a>
             </Card.Text>

          </Card.Body>
        </Card>
        </CardDeck>
      </div>
    )
  };
}
export default Project;