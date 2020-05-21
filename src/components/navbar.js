import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from '../timelines'
import Nav from '../nav'
import Homepage from "../components/homepage"
import Menu from "../components/menu"
import Openmic from "../components/openmic"
import Contact from "../components/contact"
import Crafts from "../components/crafts"

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Nav/>
          <Route render={({ location }) => {
            const { pathname, key } = location;

            return (
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear={true}
                  onEnter={(node, appears) => play(pathname, node, appears)}
                  onExit={(node, appears) => exit(node, appears)}
                  timeout={{enter: 750, exit: 150}}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/menu" component={Menu} />
                    <Route path="/crafts" component={Crafts} />
                    <Route path="/openmic" component={Openmic} />
                    <Route path="/contact" component={Contact} />
                  </Switch>
                </Transition>
              </TransitionGroup>
            )
          }}/>
        </div>
      </BrowserRouter>
    )
  }
}
  
  export default App;
