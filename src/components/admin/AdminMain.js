import React, { Component } from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import Login from './Login'

class AdminMain extends Component {
    
    constructor(props) {
        super(props);
        this.loggedIn = false //sessionStorage.getItem('admin') === 'true';
 
     }

    render() {
        if(!this.loggedIn) {
            return ( <Login/> )
        }
        return (
            <div>
                Your Login content
                <HashRouter>
                    <Switch>
                        
                    </Switch>
                </HashRouter>
            </div>
        )
    }

}

export default AdminMain