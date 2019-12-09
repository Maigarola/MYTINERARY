import React, { Component } from 'react';
import Body from './Body.js';
import Slider from './Slider.js';

class Home extends Component {
    render() {
        return (
            <div>
                <Body />
                <div className="myslider">
                <Slider />
                </div>
            </div>
        )
    }
}

export default Home;
