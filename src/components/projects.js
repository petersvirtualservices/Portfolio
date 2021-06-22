<<<<<<< HEAD
import React, { Component } from 'react';
import { Card, CardGroup, CardDeck } from 'react-bootstrap';
import img1 from '../assets/images/CocktailCoterie.PNG';
import img2 from '../assets/images/Webbie.PNG';
import img3 from '../assets/images/SugarBoos.JPG';
import img4 from '../assets/images/PVSLP1.JPG';
import img5 from '../assets/images/ChangeConverter.JPG';
import img6 from '../assets/images/PVSLP2.JPG';
import img7 from '../assets/images/MCA.JPG';

class Project extends Component {
  render() {
    return (
      <div>
        <br /><br />
<CardGroup>
  <CardDeck>
        <Card>
          <Card.Img className='projectImg' src={img1} thumbnail/>
          <Card.Body>
            <Card.Title className='projectText'>React - Cocktail Coterie</Card.Title>
            <Card.Text variant='dark'>
            <a href="https://github.com/AuroraBrune/cocktail_coterie">GitHub</a> | <a href="https://cocktail-coterie.herokuapp.com/">Demo</a>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img className='projectImg' src={img2} thumbnail/>
          <Card.Body>
          <Card.Title className='projectText'>Javascript Timed Quiz</Card.Title>                  
            <Card.Text>
            <a href="https://github.com/petersvirtualservices/TimedQuiz">GitHub</a> | <a href="https://petersvirtualservices.github.io/TimedQuiz/">Demo</a>    
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img className='projectImg' src={img3} thumbnail/>
          <Card.Body>
            <Card.Title className='projectText'>HTML/CSS Landing Page</Card.Title>            
            <Card.Text>
            <a href="sugarbooslandingpage">GitHub</a> | <a href="https://petersvirtualservices.github.io/sugarbooslandingpage/">Demo</a>
             </Card.Text>
          </Card.Body>
        </Card>
        </CardDeck>
        <CardDeck>
        <Card>
          <Card.Img className='projectImg' src={img4} thumbnail/>
          <Card.Body>
            <Card.Title className='projectText'>HTML/CSS Landing Page</Card.Title>
            <Card.Text variant='dark'>
            <a href="https://github.com/petersvirtualservices/PVSLandingPage1">GitHub</a> | <a href="https://petersvirtualservices.github.io/PVSLandingPage1/">Demo</a>
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card>
          <Card.Img className='projectImg' src={img5} thumbnail/>
          <Card.Body>
            <Card.Title className='projectText'>Javascript Change Converter</Card.Title>            
            <Card.Text>
            <a href="https://github.com/petersvirtualservices/changeconverter">GitHub</a> | <a href="https://petersvirtualservices.github.io/changeconverter/">Demo</a>
             </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img className='projectImg' src={img6} thumbnail/>
          <Card.Body>
            <Card.Title className='projectText'>HTML/CSS Landing Page</Card.Title>            
            <Card.Text>
            <a href="https://github.com/petersvirtualservices/PVSLandingPage2">GitHub</a> | <a href="https://petersvirtualservices.github.io/PVSLandingPage2/">Demo</a>
             </Card.Text>
          </Card.Body>
        </Card>
        </CardDeck>
        <CardDeck>
        <Card>
          <Card.Img className='projectImg' src={img7} thumbnail/>
          <Card.Body>
            <Card.Title className='projectText'>HTML/CSS/Javascript API</Card.Title>            
            <Card.Text>
            <a href="https://github.com/petersvirtualservices/movementconnectionanalyzer">GitHub</a> | <a href="https://petersvirtualservices.github.io/movementconnectionanalyzer/">Demo</a>
             </Card.Text>
          </Card.Body>
        </Card>
        </CardDeck>
        </CardGroup>
      </div>
    )
  };
}
=======
import React, { Component } from 'react';
import { Card, CardGroup, CardDeck } from 'react-bootstrap';
import img1 from '../assets/images/CocktailCoterie.PNG';
import img2 from '../assets/images/Webbie.PNG';
import img3 from '../assets/images/SugarBoos.JPG';
import img4 from '../assets/images/PVSLP1.JPG';
import img5 from '../assets/images/ChangeConverter.JPG';
import img6 from '../assets/images/PVSLP2.JPG';
import img7 from '../assets/images/MCA.JPG';

class Project extends Component {
  render() {
    return (
      <div>
        <br /><br />
<CardGroup>
  <CardDeck>
        <Card>
          <Card.Img className='projectImg' src={img1} thumbnail/>
          <Card.Body>
            <Card.Title className='projectText'>React - Cocktail Coterie</Card.Title>
            <Card.Text variant='dark'>
            <a href="https://github.com/AuroraBrune/cocktail_coterie">GitHub</a> | <a href="https://cocktail-coterie.herokuapp.com/">Demo</a>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img className='projectImg' src={img2} thumbnail/>
          <Card.Body>
          <Card.Title className='projectText'>Javascript Timed Quiz</Card.Title>                  
            <Card.Text>
            <a href="https://github.com/petersvirtualservices/TimedQuiz">GitHub</a> | <a href="https://petersvirtualservices.github.io/TimedQuiz/">Demo</a>    
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img className='projectImg' src={img3} thumbnail/>
          <Card.Body>
            <Card.Title className='projectText'>HTML/CSS Landing Page</Card.Title>            
            <Card.Text>
            <a href="sugarbooslandingpage">GitHub</a> | <a href="https://petersvirtualservices.github.io/sugarbooslandingpage/">Demo</a>
             </Card.Text>
          </Card.Body>
        </Card>
        </CardDeck>
        <CardDeck>
        <Card>
          <Card.Img className='projectImg' src={img4} thumbnail/>
          <Card.Body>
            <Card.Title className='projectText'>HTML/CSS Landing Page</Card.Title>
            <Card.Text variant='dark'>
            <a href="https://github.com/petersvirtualservices/PVSLandingPage1">GitHub</a> | <a href="https://petersvirtualservices.github.io/PVSLandingPage1/">Demo</a>
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card>
          <Card.Img className='projectImg' src={img5} thumbnail/>
          <Card.Body>
            <Card.Title className='projectText'>Javascript Change Converter</Card.Title>            
            <Card.Text>
            <a href="https://github.com/petersvirtualservices/changeconverter">GitHub</a> | <a href="https://petersvirtualservices.github.io/changeconverter/">Demo</a>
             </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img className='projectImg' src={img6} thumbnail/>
          <Card.Body>
            <Card.Title className='projectText'>HTML/CSS Landing Page</Card.Title>            
            <Card.Text>
            <a href="https://github.com/petersvirtualservices/PVSLandingPage2">GitHub</a> | <a href="https://petersvirtualservices.github.io/PVSLandingPage2/">Demo</a>
             </Card.Text>
          </Card.Body>
        </Card>
        </CardDeck>
        <CardDeck>
        <Card>
          <Card.Img className='projectImg' src={img7} thumbnail/>
          <Card.Body>
            <Card.Title className='projectText'>HTML/CSS/Javascript API</Card.Title>            
            <Card.Text>
            <a href="https://github.com/petersvirtualservices/movementconnectionanalyzer">GitHub</a> | <a href="https://petersvirtualservices.github.io/movementconnectionanalyzer/">Demo</a>
             </Card.Text>
          </Card.Body>
        </Card>
        </CardDeck>
        </CardGroup>
      </div>
    )
  };
}
>>>>>>> af521798ebfab9e5d4798a01b1eb314423036d34
export default Project;