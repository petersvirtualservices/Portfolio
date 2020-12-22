import React, { Component } from 'react';


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div>
                    <a href="https://github.com/AuroraBrune/cocktail_coterie">GitHub</a>
                    <a href="https://cocktail-coterie.herokuapp.com/">Live Demo</a>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <a href="https://github.com/petersvirtualservices/WeatherAPI">GitHub</a>
                    <a href="https://petersvirtualservices.github.io/WeatherAPI/">Live Demo</a>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <a href="https://github.com/petersvirtualservices/WeatherAPI">GitHub</a>
                    <a href="https://petersvirtualservices.github.io/WeatherAPI/">Live Demo</a>
                </div >
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div>

                    <a href="https://github.com/petersvirtualservices/WeatherAPI">GitHub</a>
                    <a href="https://petersvirtualservices.github.io/WeatherAPI/">Live Demo</a>

                </div>
            )
        } else if (this.state.activeTab === 4) {
            return (
                <div>

                    <a href="https://github.com/petersvirtualservices/WeatherAPI">GitHub</a>
                    <a href="https://petersvirtualservices.github.io/WeatherAPI/">Live Demo</a>

                </div>
            )
        } else if (this.state.activeTab === 5) {
            return (
                <div>

                    <a href="https://github.com/petersvirtualservices/WeatherAPI">GitHub</a>
                    <a href="https://petersvirtualservices.github.io/WeatherAPI/">Live Demo</a>

                </div>
            )
        } else if (this.state.activeTab === 6) {
            return (
                <div>

                    <a href="https://github.com/petersvirtualservices/WeatherAPI">GitHub</a>
                    <a href="https://petersvirtualservices.github.io/WeatherAPI/">Live Demo</a>

                </div>
            )

        }
    }
};

export default Project;