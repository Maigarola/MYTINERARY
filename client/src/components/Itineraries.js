import React, { Component } from 'react';
import { connect } from "react-redux";
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
                <ul>
                    {itineraries.map(itinerary => (
                        <React.Fragment key={itinerary._id}>
                            <li>{itinerary.title}</li>
                            <li> {itinerary.img}</li>
                            <li> {itinerary.rating}</li>
                            <li> {itinerary.duration}</li>
                            <li> {itinerary.price}</li>
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