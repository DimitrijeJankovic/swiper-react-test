import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
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
          <div>
            <Navbar />
              <div className="body">
                <Switch>
                    <Route path="/main/gallery/:id" component={GalleryImg} />
                    <Route path="/main/gallery" component={Gallery} />
                    <Route path="/main/about" component={About} />
                    <Route path="/main/contact" component={Contact} />
                    <Route path="/main" component={Main} />
                </Switch>
              </div>
            <Footer />
          </div>
      )
    }
    
  }
  
  export default WebSite