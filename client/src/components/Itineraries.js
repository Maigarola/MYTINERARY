import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { getItineraries } from "../store/actions/itineraryAction.js";


export class Itinerary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itineraries: [],
        };
    }

    componentDidMount() {
        this.props.getItineraries(this.props.match.params.cityId);
    }

    render() {
        const { itineraries } = this.props;
        return (
            <div>
                <h1>Itineraries</h1>
                <ul className="ulnotvisible">
                    {itineraries.map(itinerary => (
                        <React.Fragment key={itinerary._id}>
                            <NavLink className="links" to={"/activities/"+ itinerary._id}><li>{itinerary.title}</li></NavLink>
                            <ul className="ulnotvisible">
                            <li> Rating: {itinerary.rating}</li>
                            <li> Duration: {itinerary.duration}</li>
                            <li> Price: "{itinerary.price}"</li>
                            </ul> 
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log(state);
    return {
        itineraries: state.itineraries.itineraries, //primer key de itineraryreducer
    }
};

export default connect(mapStateToProps, { getItineraries })(
    Itinerary
);