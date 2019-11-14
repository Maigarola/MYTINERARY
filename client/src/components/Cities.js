import React, { Component } from 'react';
import { connect } from "react-redux";
import { getCities } from "../store/actions/cityAction.js";
import { NavLink } from 'react-router-dom';
import CityFilter from "./CityFilter";

export class cities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            filteredCities: []
        };
    }

    componentDidMount() {
        this.props.getCities();
    }

    filterCities = cityFilter => {
        let filteredCities = this.props.cities
        filteredCities = filteredCities.filter(city => {
          let cityName = city.name.toLowerCase() + city.country.toLowerCase()
          return (cityName.indexOf(cityFilter.toLowerCase()) !== -1)
        })
       this.setState({
          filteredCities
        })
      }

    render() {
        
        let filteredCities = this.state.filteredCities

        if (this.state.filteredCities.length === 0){
            filteredCities = this.props.cities
        }
        // if (cities.isLoaded) {
        //     return (<h1>...LOADING CITIES...</h1>)
        // }
        // else {
        return (
            <div>
                <h1>Cities</h1>
                <CityFilter onChange={this.filterCities}/>  
                <ul className="ulnotvisible">
                    {filteredCities.map(city => (
                        <React.Fragment key={city._id}>
                            <NavLink className="links" to={"/itineraries/"+ city._id}> <li><button className = "mybutton"> {city.name}, {city.country}</button></li></NavLink>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        )
    }
    // }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        cities: state.cities.cities, //primer key de cityreducer
        isLoaded: state.cities.isLoaded
    }
};

export default connect(mapStateToProps, {getCities})(
    cities
    );
