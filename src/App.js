import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import './App.css'

class App extends Component {
  render() {
    const params = {
      pagination: {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    }

    return(
      <Swiper {...params}>
        <div className="slide1"><img src="images/img1.jpg" alt="img1" /></div>
        <div className="slide1"><img src="images/2.jpg" alt="img2" /></div>
        <div className="slide1"><img src="images/3.jpg" alt="img3" /></div>
        <div className="slide1"><img src="images/4.jpg" alt="img4" /></div>
    </Swiper>
    )
  }
}

export default App;
