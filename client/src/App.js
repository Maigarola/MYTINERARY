import React, { Component } from 'react'; // react
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

//Componentes
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from "./components/Home.js"
import Users from "./components/Users.js"
import Menu from "./components/Menu.js"
import Browsing from "./components/Browsing.js"

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
            <Route path="/browsing" component={Browsing} />
          </Switch>
          <Footer />

        </BrowserRouter>
      </div >
    );
  }
}
export default App;
