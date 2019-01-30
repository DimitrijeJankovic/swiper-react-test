import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../index.css'

class Navbar extends Component {

	constructor(props){
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.closeNavbar = this.closeNavbar.bind(this);
	}

	state = {
		toggleMenu: false,
	}

	toggleNavbar(){
		this.setState({
			toggleMenu: !this.state.toggleMenu
		})
	}

	closeNavbar(){
		if (this.state.toggleMenu === true) {
			this.toggleNavbar();
		}
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
								<div className="nav-menu-btn" onClick = { this.toggleNavbar }>
									<i className="fas fa-bars"></i>
								</div>
								<nav className={this.state.toggleMenu ? "menu-links menu-links-mob" : "menu-links"}>
									<ul>
										<li onClick = {this.closeNavbar} className="m-b-5"><Link to={"/"}>Home</Link></li>
										<li onClick = {this.closeNavbar} className="m-b-10"><Link to={"/gallery"}>Gallery</Link></li>
										<li onClick = {this.closeNavbar} className="m-b-15"><Link to={"/about"}>About</Link></li>
										<li onClick = {this.closeNavbar} className="m-b-20"><Link to={"/contact"}>Contact</Link></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
		)
	}
}

export default Navbar