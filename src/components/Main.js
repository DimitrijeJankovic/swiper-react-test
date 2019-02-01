import React, { Component } from 'react';
import Swiper from 'react-id-swiper'; 
import '../index.css'

class Main extends Component {
	
	render() {

		const params = {
	      slidesPerView: 1,
	      centeredSlides: true,
				loop: true,
				spaceBetween: 30,
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

	    const image = {
	      img1: {
	        backgroundImage: 'url("images/img1.jpg")'
	      },
	      img2: {
	        backgroundImage: 'url("images/img2.jpg")'
	      },
	      img3: {
	        backgroundImage: 'url("images/img3.jpg")'
	      },
	      img4: {
	        backgroundImage: 'url("images/img4.jpg")'
	      }
	    }

		return (
			<div className="row">
            <div className="main">

              <Swiper {...params}>

                <div className="swiper-main-conatiner">
                  <div className="overlay"></div>
                  <div className="bg" style={image.img1}></div>
                  <div className="swiper-content">
                  </div>
                </div>

                <div className="swiper-main-conatiner">
                  <div className="overlay"></div>
                  <div className="bg" style={image.img2}></div>
                  <div className="swiper-content">
                  </div>
                </div>

                <div className="swiper-main-conatiner">
                  <div className="overlay"></div>
                  <div className="bg" style={image.img3}></div>
                  <div className="swiper-content">
                  </div>
                </div>

                <div className="swiper-main-conatiner">
                  <div className="overlay"></div>
                  <div className="bg" style={image.img4}></div>
                  <div className="swiper-content">
                  </div>
                </div>

            </Swiper>
            </div>
          </div>
		)
	}
}

export default Main