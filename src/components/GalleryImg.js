import React from 'react'
import Swiper from 'react-id-swiper'; 
import '../index.css'

const params = {
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
};

const upperCase = (str) => {
    const splitStr = str.toLowerCase().split(' ')

    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    
    return splitStr.join(' '); 
}

const GalleryImg = (props) => {

    const id = props.match.params.id;
    const name = id.replace(/-/g, " ");

    return (
        <div className="row x-min">
            <div className="wrapper fullsceen-wrap">
                <div class="content full-height">
                    <div class="slider-wrap homecarousel hompad lightgallery lg-synk">
                        <div class="swiper-container">
                            <Swiper {...params}>

                            <div class="swiper-slide">
                                <img src="images/img4.jpg" alt="img7"/>
                                <div className="sw-content">
                                    <h1 className="gallery-name">{upperCase(name)}</h1>
                                    <p className="photografer-name">Photographer: <span>Dragan Smiljkovic</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <img src="images/img2.jpg" alt="img7"/>
                                <div className="sw-content">
                                    <h1 className="gallery-name">Marko i Sofija</h1>
                                    <p className="photografer-name">Photographer: <span>Dragan Smiljkovic</span></p>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <img src="images/img5.jpg" alt="img7"/>
                                <div className="sw-content">
                                    <h1 className="gallery-name">Marko i Sofija</h1>
                                    <p className="photografer-name">Photographer: <span>Dragan Smiljkovic</span></p>
                                </div>
                            </div>
                                
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryImg
