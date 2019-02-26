import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AdminSidenav extends Component {
    render() {
        return (
            <nav id="sidebar">
                <div class="sidebar-header d-flex align-items-center">
                    <div class="avatar">
                        <img src="images/ds.jpg" alt="..." class="img-fluid rounded-circle"/>
                    </div>
                    <div class="title">
                        <h1 class="h3">Dragan Smiljkovic</h1>
                        <p>Admin</p>
                    </div>
                </div>
                <ul class="list-unstyled">
                    <li class="active"><Link to={"/admin/main-page"}><i class="fas fa-home"></i>Home</Link></li>
                    <li><Link to={"/admin/gallery-page"}><i class="fas fa-image"></i>Galley</Link></li>
                    <li><Link to={"/admin/about-page"}><i class="fas fa-users"></i>About</Link></li>
                    <li><Link to={"/admin/contact-page"}><i class="fas fa-info-circle"></i>Contact</Link></li>
                </ul>
            </nav>
        )
    }
}

export default AdminSidenav
