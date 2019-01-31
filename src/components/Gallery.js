import React, { Component } from 'react';
import Swiper from 'react-id-swiper'; 
import '../index.css'

class Main extends Component {
	
    render() {

        const params = {
            slidesPerView: 'auto',
            spaceBetween: 30,
            freeMode: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            }
        };

        return(
            <div className="row">
            <div className="wrapper fullsceen-wrap">
                <div class="content full-height">
                    <div class="slider-wrap homecarousel hompad lightgallery lg-synk">
                        <div class="swiper-container">
                            <Swiper {...params}>

                                <div class="swiper-slide">
                                    <img src="images/img1.jpg" alt="img1" />
                                </div>

                                <div class="swiper-slide">
                                    <img src="images/img2.jpg" alt="img2"/>
                                </div>
                                <div class="swiper-slide">
                                    <img src="images/img3.jpg" alt="img3"/>
                                </div>
                                <div class="swiper-slide">
                                    <img src="images/img4.jpg" alt="img4"/>
                                </div>
                                <div class="swiper-slide">
                                    <img src="images/about.jpg" alt="img5"/>
                                </div>
                                <div class="swiper-slide">
                                    <img src="images/contact.jpg" alt="img6"/>
                                </div>
                                <div class="swiper-slide">
                                    <img src="images/portrate.jpg" alt="img7"/>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Main