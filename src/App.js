import React, { Component } from 'react';
import { HashRouter, Switch, Route,  } from 'react-router-dom'
import './App.css'

import Navbar from './components/global/Navbar'
import Footer from './components/global/Footer'
import Main from './components/Main'
import About from './components/About'
import Contact from './components/Contact'

class App extends Component {

  render() {
    return(
      <HashRouter>
        <div className="container-fluid">
          <Navbar />
          <Switch>
            <div>
              <Route exact path="/" component={Main} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </div>
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    )
  }


}

export default App
