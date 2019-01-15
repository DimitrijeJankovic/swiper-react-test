import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import './App.css'

class App extends Component {

  state = {
    toggleMenu: false,
  }

  render() {

    const params = {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
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

    return(
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="nav-bar">
              <div className="nav-info col-lg-4">
                <ul>
                  <li>
                    <a href="#"><span>Call:</span> +381601479990</a>
                  </li>
                  <li>
                    <a href="#"><span>Write:</span> info@dsphotography.com</a>
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
                  <i class="fas fa-bars"></i>
                </div>
                <nav className={this.state.toggleMenu ? "menu-links menu-links-mob" : "menu-links"}>
                  <ul>
                    <li><a hraf="#" className="activ-link">Home</a></li>
                    <li><a hraf="#">Weddings</a></li>
                    <li><a hraf="#">About</a></li>
                    <li><a hraf="#">Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="main">
              <Swiper {...params}>
                <div className="swiper-main-conatiner">
                  <div className="overlay"></div>
                  <div className="bg" style={image.img1}></div>
                  <div className="swiper-content">
                    <h3>Some text</h3>
                    <p>ovde ide nesto najslepse sto se ikada culi u zivotu</p>
                  </div>
                </div>
                <div className="swiper-main-conatiner">
                  <div className="overlay"></div>
                  <div className="bg" style={image.img2}></div>
                  <div className="swiper-content">
                    <h3>Some text</h3>
                    <p>ovde ide nesto najslepse sto se ikada culi u zivotu</p>
                  </div>
                </div>
                <div className="swiper-main-conatiner">
                  <div className="overlay"></div>
                  <div className="bg" style={image.img3}></div>
                  <div className="swiper-content">
                    <h3>Some text</h3>
                    <p>ovde ide nesto najslepse sto se ikada culi u zivotu</p>
                  </div>
                </div>
                <div className="swiper-main-conatiner">
                  <div className="overlay"></div>
                  <div className="bg" style={image.img4}></div>
                  <div className="swiper-content">
                    <h3>Some text</h3>
                    <p>ovde ide nesto najslepse sto se ikada culi u zivotu</p>
                  </div>
                </div>
            </Swiper>
            </div>
          </div>
          <div className="row">
            <footer className="footer">
              <div className="policy col-lg-4">
                <span>© DSPhotography 2019  /  All rights reserved. </span>
              </div>
              <div className="swiper-pagination col-lg-4">
              </div>
              <div className="social-media col-lg-4">
                <ul>
                  <li><a href="#"><span>Facebook</span></a></li>
                  <li><a href="#"><span>Instagram</span></a></li>
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
