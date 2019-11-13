import React, { Component } from 'react';
import { connect } from "react-redux";
import { getActivities } from "../store/actions/activityAction";


export class Activity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: [],
        };
    }

    componentDidMount() {
        this.props.getActivities(this.props.match.params.itineraryId);
    }

    render() {
        const { activities } = this.props;
        return (
            <div>
                <h1>Activities</h1>
                <ul className="ulnotvisible">
                    {activities.map(activity => (
                        <React.Fragment key={activity._id}>
                            <li><h3>{activity.name}</h3></li>
                            <ul className="ulnotvisible">
                            <li> Adress: {activity.adress}</li>
                            <li> Duration: {activity.duration} hours</li>
                            <li> Price: "{activity.price}"</li>
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
        activities: state.activities.activities, //primer key de activityreducer
    }
};

export default connect(mapStateToProps, { getActivities })(
    Activity
);