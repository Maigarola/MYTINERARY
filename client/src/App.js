import React, { Component } from 'react'; // react
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

//Componentes
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from "./components/Home.js"
import Users from "./components/Users.js"
import Menu from "./components/Menu.js"
import Cities from "./components/Cities.js"
import Itineraries from './components/Itineraries';
import Activities from './components/Activities';


class App extends Component {
  render() {
    return (
      <div className="App" >
        
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/menu" component={Menu} />
            <Route path="/cities" component={Cities} />
            <Route path="/itineraries/:cityId" component={Itineraries} />
            <Route path="/activities/:itineraryId" component={Activities} />

          </Switch>
          <Footer />

        </BrowserRouter>
      </div >
    );
  }
}
export default App;
