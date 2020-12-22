import React, { Component } from 'react';
import { Tabs, Tab, Card, CardText, CardTitle, CardActions, Button } from 'react-mdl';
import Footer from './footer';


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid" style={{ minWidth: '500',margin: 'auto 0' }}>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'fff', height: '176px', background: 'url(https://lnselblog.files.wordpress.com/2013/10/th_06212013_060626_web-development.jpg) center/cover' }}>Cocktail Coterie</CardTitle>
                        <CardText>
                            This site helps pair you with some good friends and some good alcoholic beverages.

                            I worked with a dynamic group to finish this website.  My responsibility included developing the login and registration pages, and I had to use BCrypt, Javascript, Sequelize, Passport, and MySQL to accomplish this.
                </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/AuroraBrune/cocktail_coterie">GitHub</Button>
                            <Button colored href="https://cocktail-coterie.herokuapp.com/">Live Demo</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'fff', height: '176px', background: 'url(https://lnselblog.files.wordpress.com/2013/10/th_06212013_060626_web-development.jpg) center/cover' }}>WeatherAPI</CardTitle>
                        <CardText>
                            Find the weather forecast right where you live.  This project was one of the first ones that I had to use Javascript on my own.  When I started the class, I didn't know a thing about Javascript, but when everything seemed like a blur, I did not give up.  I used every available resource I could, and I was able to finish with an A.
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/petersvirtualservices/WeatherAPI">GitHub</Button>
                            <Button colored href="https://petersvirtualservices.github.io/WeatherAPI/">Live Demo</Button>
                        </CardActions>
                    </Card>
                    <Footer />
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'fff', height: '176px', background: 'url(https://lnselblog.files.wordpress.com/2013/10/th_06212013_060626_web-development.jpg) center/cover' }}>WeatherAPI</CardTitle>
                        <CardText>
                            This is my first post-bootcamp project.  I Love Romantic Book Quotes promotes authors to a wide assortment of interested readers.  This site combines all of your romantic book quotes with quick access to their books. Contents: Javascript, Bootstrap, React, eCommerce site, MySQL, Entertainment Site
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/petersvirtualservices/WeatherAPI">GitHub</Button>
                            <Button colored href="https://petersvirtualservices.github.io/WeatherAPI/">Live Demo</Button>
                        </CardActions>
                    </Card>
                    <Footer />
                </div>
            )
        }else if (this.state.activeTab === 3) {
            return (
                <div>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'fff', height: '176px', background: 'url(https://lnselblog.files.wordpress.com/2013/10/th_06212013_060626_web-development.jpg) center/cover' }}>WeatherAPI</CardTitle>
                        <CardText>
                            This is my first post-bootcamp project.  I Love Romantic Book Quotes promotes authors to a wide assortment of interested readers.  This site combines all of your romantic book quotes with quick access to their books. Contents: Javascript, Bootstrap, React, eCommerce site, MySQL, Entertainment Site
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/petersvirtualservices/WeatherAPI">GitHub</Button>
                            <Button colored href="https://petersvirtualservices.github.io/WeatherAPI/">Live Demo</Button>
                        </CardActions>
                    </Card>
                    <Footer />
                </div>
            )
        }else if (this.state.activeTab === 4) {
            return (
                <div>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'fff', height: '176px', background: 'url(https://lnselblog.files.wordpress.com/2013/10/th_06212013_060626_web-development.jpg) center/cover' }}>WeatherAPI</CardTitle>
                        <CardText>
                        O-Blessed: A site dedicated to helping obese men and women appreciate their bodies so that they can get started on a daily habit rather than a diet. Contents: Blog, Comment Section, MySQL, Recipes, Entertainment site, Login, Newsfeed on Obesity Articles, Non-Profit?, Educational Website
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/petersvirtualservices/WeatherAPI">GitHub</Button>
                            <Button colored href="https://petersvirtualservices.github.io/WeatherAPI/">Live Demo</Button>
                        </CardActions>
                    </Card>
                    <Footer />
                </div>
            )
        }else if (this.state.activeTab === 5) {
            return (
                <div>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'fff', height: '176px', background: 'url(https://lnselblog.files.wordpress.com/2013/10/th_06212013_060626_web-development.jpg) center/cover' }}>WeatherAPI</CardTitle>
                        <CardText>
                        Peters Virtual Services - A site that has reviews, examples of work, and purchase of services through Upwork.Content: React, Business Site, Lead Generation Site, Brochure Site
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/petersvirtualservices/WeatherAPI">GitHub</Button>
                            <Button colored href="https://petersvirtualservices.github.io/WeatherAPI/">Live Demo</Button>
                        </CardActions>
                    </Card>
                    <Footer />
                </div>
            )
        }else if (this.state.activeTab === 6) {
            return (
                <div>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'fff', height: '176px', background: 'url(https://lnselblog.files.wordpress.com/2013/10/th_06212013_060626_web-development.jpg) center/cover' }}>WeatherAPI</CardTitle>
                        <CardText>
                        Infopreneur Site - Teaching people how to be a virtual assistant. Content: React, Business Site, Lead Generation Site
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/petersvirtualservices/WeatherAPI">GitHub</Button>
                            <Button colored href="https://petersvirtualservices.github.io/WeatherAPI/">Live Demo</Button>
                        </CardActions>
                    </Card>
                    <Footer />
                </div>
            )

        }
    }
   



    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Cocktail Coterie</Tab>
                    <Tab>Weather App</Tab>
                    <Tab>I Love Romantic Book Quotes</Tab>
                </Tabs>
                <div className="projects-content">{(this.toggleCategories())}</div>
            </div>

        )
    }
};

export default Project;