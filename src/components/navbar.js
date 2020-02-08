import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import Homepage from "../components/homepage"
import Menu from "../components/menu"
import Openmic from "../components/openmic"
import Contact from "../components/contact"


class Navbar extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <ul className="nav-div">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/openmic">Open Mic</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
  
          <hr />

          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/openmic">
              <Openmic />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
      );
    }
  }

  export default Navbar