import React, { Component } from 'react';
import { connect } from "react-redux";
import { getItineraries } from "../store/actions/itineraryAction.js";
import Toggle from "./Toggle"

// import Activities from "./Activities"

export class Itinerary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itineraries: [],
            mycity: {},
            myactivities: []
        };
    }

    componentDidMount() {
        
        this.props.getItineraries(this.props.match.params.cityId);
        
            fetch("/cities/find/" + this.props.match.params.cityId)
             .then (res => res.json())
             .then (data =>{
            this.setState ({
                mycity : data
                })
            });

            fetch("/activities/find/" + this.props.match.params.cityId)
            .then (res => res.json())
            .then (data =>{
            this.setState ({
                myactivities : data
                })
           });
    }

     render() {

        const { itineraries } = this.props;
            
        return (
            <div>
                <h1 className = "cityname">{this.state.mycity.name}</h1>
                <div className="ulnotvisible">
                    {itineraries.map(itinerary => (
                        <React.Fragment key={itinerary._id}>
                            <Toggle itinerary = {itinerary} activities = {this.state.myactivities}/>
                        </React.Fragment>
                    ))}
                </div>
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