import React, { Component } from 'react';
import Swiper from 'react-id-swiper'; 
import { Link } from 'react-router-dom'
import GalleryTemp from './templates/GalleryTemp'
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
          <div className="row x-min">
            <div className="wrapper fullsceen-wrap">
              <div class="content full-height">
                <div class="slider-wrap homecarousel hompad lightgallery lg-synk">
                  <div class="swiper-container">
                    <Swiper {...params}>
                      <Link to={"/main/gallery/jelena-i-marko"}>
                        <GalleryTemp/>
                      </Link>
                      <GalleryTemp/>
                      <GalleryTemp/>
                      <GalleryTemp/>
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