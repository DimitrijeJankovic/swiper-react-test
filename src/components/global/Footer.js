import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../../index.css'

class Footer extends Component {
	
	render() {
		return (
			<div className="row">
	            <footer className="footer">
	              <div className="policy col-lg-4">
	                <span>© DSPhotography 2019  /  All rights reserved. </span>
	              </div>
	              <div className="swiper-pagination col-lg-4">
	              </div>
	              <div className="social-media col-lg-4">
	                <ul>
	                  <li><Link to={"/"}><span>Facebook</span></Link></li>
	                  <li><Link to={"/"}><span>Instagram</span></Link></li>
	                </ul>
	              </div>
	            </footer>
          	</div>
		)
	}
}

export default Footer