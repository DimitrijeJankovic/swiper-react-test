import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/global/Navbar'
import Footer from './components/global/Footer'
import Main from './components/Main'
import Gallery from './components/Gallery'
import GalleryImg from './components/GalleryImg'
import About from './components/About'
import Contact from './components/Contact'

import AdminMain from './components/admin/AdminMain'

class App extends Component {
  
  admin(){
    return(
        <div className="container-fluid">
          <AdminMain/>
        </div>
    )
  }

  main(){
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

  render() {
    const url = window.location.pathname

    if(url === "/admin"){
      return( this.admin() )      
    }else{
      return( this.main() )
    }
  }
  
}

export default App
