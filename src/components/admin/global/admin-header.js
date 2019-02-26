import React, { Component } from 'react'

class AdminHeader extends Component {
    render() {
        return (
        <div className="row">
            <div classNam="col-lg-12">
                <div className="header">
                    <nav className="navbar navbar-expand-lg">
                        <div class="navbar-header">
                            <a href="index.html" class="navbar-brand">
                            <div class="brand-text brand-big visible text-uppercase"><strong class="text-primary">OP</strong><strong>Admin</strong></div>
                            <div class="brand-text brand-sm"><strong class="text-primary">O</strong><strong>P</strong></div></a>
                            <div className="arrow-down">
                                <button class="sidebar-toggle"><i class="fas fa-arrow-left"></i></button>
                            </div>
                        </div>
                        <div class="right-menu list-inline no-margin-bottom">    
                            <div class="list-inline-item logout">
                                <a id="logout" href="www.google.com" class="nav-link"> 
                                    <span class="d-none d-sm-inline">Logout</span>
                                    <i class="fas fa-power-off"></i>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        )
    }
}

export default AdminHeader