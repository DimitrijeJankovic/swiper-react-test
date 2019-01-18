import React, { Component } from 'react';
import { BrowserRouter, Switch, Route,  } from 'react-router-dom'
import './App.css'

import Navbar from './components/global/Navbar'
import Footer from './components/global/Footer'
import Main from './components/Main'
import About from './components/About'

class App extends Component {

  render() {
    return(
      <BrowserRouter>
        <div className="container-fluid">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }


}

export default App
