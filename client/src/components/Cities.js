import React, { Component } from 'react';
import { connect } from "react-redux";
import { getCities } from "../store/actions/cityAction.js";
import { NavLink } from 'react-router-dom';

export class cities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        this.props.getCities();
    }

    render() {
        const { cities } = this.props;
        console.log(cities);

        if (cities.isLoaded) {
            return (<h1>...LOADING CITIES...</h1>)
        }
        else {
            return (
                <div>
                    <h1>Cities</h1>
                    <ul>
                        {cities.map(city => (
                            <React.Fragment key={cities._id}>
                                <NavLink to={"/itineraries"}> <li> {city.name}, {city.country}</li></NavLink>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        cities: state.cities.cities, //primer key de cityreducer
        isLoaded: state.cities.isLoaded
    }
};

export default connect(mapStateToProps, { getCities })(
    cities
);