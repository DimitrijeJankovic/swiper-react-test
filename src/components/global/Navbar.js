import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../../index.css'

class Navbar extends Component {

	state = {
		toggleMenu: false,
	}

	render() {
		return (
			<div className="row">
		        <div className="nav-bar">
		          <div className="nav-info col-lg-4">
		            <ul>
		              <li>
		                <Link to={"/"}><span>Call:</span> +381601479990</Link>
		              </li>
		              <li>
		                <Link to={"/"}><span>Write:</span> info@dsphotography.com</Link>
		              </li>
		            </ul>
		          </div>
		          <div className="nav-logo col-lg-4">
		            <img src="images/logo.png" alt="logo" />
		          </div>
		          <div className="nav-menu-links col-lg-4">
		            <div className="nav-search-icon">
		              <i className="fas fa-search"></i>
		            </div>
		            <div className="nav-menu-btn" onClick = { () => this.setState({ toggleMenu: !this.state.toggleMenu }) }>
		              <i className="fas fa-bars"></i>
		            </div>
		            <nav className={this.state.toggleMenu ? "menu-links menu-links-mob" : "menu-links"}>
		              <ul>
		                <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/gallery"}>Weddings</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                        <li><Link to={"/contact"}>Contact</Link></li>
		              </ul>
		            </nav>
		          </div>
		        </div>
	          </div>
		)
	}
}

export default Navbar