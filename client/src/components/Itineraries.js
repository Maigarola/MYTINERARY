import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { getItineraries } from "../store/actions/itineraryAction.js";
import { getActivities } from "../store/actions/activityAction.js";
import Toggle from "./Toggle"

export class Itinerary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itineraries: [],
            activities:[]
        };
    }

    componentDidMount() {
        this.props.getItineraries(this.props.match.params.cityId);
        this.props.getActivities(this.props.match.params.ItineraryId);
    }

    render() {
        const { itineraries } = this.props;
        return (
            <div>
                <h1>Itineraries</h1>
                <ul className="ulnotvisible">
                    {itineraries.map(itinerary => (
                        <React.Fragment key={itinerary._id}>
                            <Toggle itineraries = {this.state.itineraries} activities = {this.state.activities}/>
                            <NavLink className="itinerary" to={"/activities/"+ itinerary._id}><li>{itinerary.title}</li></NavLink>
                            <ul className="ulnotvisible">
                            {/* <li> Rating: {itinerary.rating}</li>
                            <li> Duration: {itinerary.duration}</li>
                            <li> Price: "{itinerary.price}"</li> */}
                            </ul> 
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itineraries: state.itineraries.itineraries, //primer key de itineraryreducer
        activities:state.activities.activities
    }
};

export default connect(mapStateToProps, { getItineraries, getActivities })(Itinerary);