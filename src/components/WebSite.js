import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import '../App.css'

import Navbar from './global/Navbar'
import Footer from './global/Footer'
import Main from './Main'
import Gallery from './Gallery'
import GalleryImg from './GalleryImg'
import About from './About'
import Contact from './Contact'

class WebSite extends Component {

    render() {
      return(
        <HashRouter>
          <div className="container-fluid">
              <Navbar />
            <Switch>
              <div className="body">
                <Route exact path="/" component={Main} />
                <Route path="/gallery/:id" component={GalleryImg} />
                <Route path="/gallery" component={Gallery} />
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
  
  export default WebSite