import React, { Component } from 'react';
import { connect } from "react-redux";
// import { NavLink } from 'react-router-dom';
import { getItineraries } from "../store/actions/itineraryAction.js";
import Toggle from "./Toggle"

// import Activities from "./Activities"

export class Itinerary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itineraries: []
        };
    }

    componentDidMount() {
        
        this.props.getItineraries(this.props.match.params.cityId);

        console.log(this.props.match.params.cityId);
        
            fetch("/cities/find/" + this.props.match.params.cityId)
             .then (res => res.json())
             .then (mycity =>{
            console.log(mycity);
            });

            fetch("/activities/find/" + this.props.match.params.cityId)
            .then (res => res.json())
            .then (myactivities =>{
           console.log(myactivities);
           });
    }

    render() {
       
        const { itineraries } = this.props;
        return (
            <div>
                {/* <h1>{}</h1> */}
                <ul className="ulnotvisible">
                    {itineraries.map(itinerary => (
                        <React.Fragment key={itinerary._id}>
                            <Toggle itinerary = {itinerary}/>
                            {/* <NavLink className="itinerary" to={"/activities/"+ itinerary._id}><li>{itinerary.title}</li></NavLink> */}
                            {/* <ul className="ulnotvisible"> */}
                            {/* <li> Rating: {itinerary.rating}</li>
                            <li> Duration: {itinerary.duration}</li>
                            <li> Price: "{itinerary.price}"</li> */}
                            {/* </ul>  */}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itineraries: state.itineraries.itineraries //primer key de itineraryreduce
    }
};

export default connect(mapStateToProps, { getItineraries })(Itinerary);