import React, { Component } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'

class AdminMain extends Component {
    
    constructor(props) {
        super(props);
        this.loggedIn = sessionStorage.getItem('admin') === 'true';
     }

    render() {
        if(!this.loggedIn) {
            return ( <Login/> )
        }else{
            return ( <Dashboard/> )
        }
            
    }

}

export default AdminMain