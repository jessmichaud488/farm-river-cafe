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
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/menu">MENU</Link>
            </li>
            <li>
              <Link to="/openmic">OPEN MIC</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
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