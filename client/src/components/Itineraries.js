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
        this.props.getItineraries();
    }

    render() {
        console.log(this.props);
        const { itineraries } = this.props;
        console.log(itineraries);

        return (
            <div>
                <h1>Itineraries</h1>
                <ul>
                    {itineraries.map(itinerary => (
                        <React.Fragment key={itinerary._id}>
                            <li> 
                            {itinerary.title}, 
                            {itinerary.img},
                            {itinerary.rating},
                            {itinerary.duration},
                            {itinerary.price},
                            </li>
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