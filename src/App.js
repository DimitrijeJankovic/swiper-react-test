import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css'


import WebSite from './components/WebSite'
import AdminMain from './components/admin/AdminMain'

class App extends Component {

  render() {
    return(
      <HashRouter>
        <div>
          <Switch>
            <div>
              <Redirect from="/" to="/admin" />
              <Route path="/main" component={WebSite} />
              <Route path="/admin" component={AdminMain} />
            </div>
          </Switch>
        </div>
      </HashRouter>
    )
  }
  
}

export default App
