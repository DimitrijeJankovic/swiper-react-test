import React, { Component } from 'react';
import Swiper from 'react-id-swiper'; 
import '../index.css'
import { connect } from 'react-redux' 

class Main extends Component {
	
	render() {

		const params = {
	      slidesPerView: 1,
	      centeredSlides: true,
				loop: true,
				freeMode: true,
	      autoplay: {
	        delay: 4000,
	        disableOnInteraction: false
	      },
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev'
	      }
	    }

		return (
			<div className="row">
				<div className="main">
					<Swiper {...params}>
						{this.props.mainSlider && this.props.mainSlider.map(slider => {
							return( 
								<div className="swiper-main-conatiner">
										<div className="overlay"></div>
										<div className="bg" style={slider.img}></div>
										<div className="swiper-content">
										</div>
								</div>
							)
						})}
					</Swiper>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) =>{
	return{
		mainSlider: state.main.mainSlider
	}
}

export default connect(mapStateToProps)(Main)