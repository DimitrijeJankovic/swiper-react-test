import React, { Component } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'

class AdminMain extends Component {
    
    constructor(props) {
        super(props);
        this.loggedIn = false //sessionStorage.getItem('admin') === 'true';
     }

    render() {
        if(this.loggedIn) {
            return ( <Dashboard/> )
        }else{
            return ( <Login/> )
        }
            
    }

}

export default AdminMain