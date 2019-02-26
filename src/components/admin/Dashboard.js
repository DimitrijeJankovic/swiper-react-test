import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import '../../style/Admin.css'

import AdminHeader from './global/admin-header'
import AdminSidenav from './global/admin-sidenav'
import MainPage from './MainPage'
import GalleryPage from './GalleryPage'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'

class Dashboard extends Component {
    render() {
        return (
            <div className="main-admin">
                <AdminHeader/>
                <div className="row">
                    <div className="col-lg-2">
                        <AdminSidenav/>
                    </div>
                    <div className="col-lg-10 admin-work-space">
                    <Switch>
                        <Route path="/admin/main-page" component={MainPage} />
                        <Route path="/admin/gallery-page" component={GalleryPage} />
                        <Route path="/admin/about-page" component={AboutPage} />
                        <Route path="/admin/contact-page" component={ContactPage} />
                    </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard