import React, { Component } from 'react';
import '../index.css'

class About extends Component {

  render() {

    const image = {
      backgroundImage: 'url("images/about.jpg")'
    }

    return(
      <div>
        <div className="row">
          <div className="about-container col-md-12">
            <div className="overlay"></div>
            <div className="bg" style={image}></div>
            <div className="about-main-text">
              <h1>WELCOME TO <br/>OUR STUDIO</h1>
            </div>
          </div>
        </div>
        <div className="about-content">
          <div className="our-story">
              <h3>Out Story</h3>
              <p>
                Praesent nec leo venenatis elit semper aliquet id ac enim. Maecenas 
                nec mi leo. Etiam venenatis ut dui non hendrerit. Integer dictum, 
                diam vitae blandit accumsan, dolor odio tempus arcu, vel ultrices 
                nisi nibh vitae ligula. Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Morbi varius lacinia vestibulum. Aliquam lobortis
                 facilisis tellus, in facilisis ex vehicula ac. In malesuada quis 
                 turpis vel viverra.
              </p>
              <p>
                Praesent nec leo venenatis elit semper aliquet id ac enim. Maecenas 
                nec mi leo. Etiam venenatis ut dui non hendrerit. Integer dictum, diam 
                vitae blandit accumsan, dolor odio tempus arcu, vel ultrices nisi nibh 
                vitae ligula.
              </p>
            </div>
            <hr/>
            <div className="team">
              <h2>Team</h2>

              <div className="member-container">
                <div className="row">
                  <div className="member col-lg-4">
                    <div className="member-img overlay-member" style={image}></div>
                    <h3 className="member-name">Dimitrije Jankovic</h3>
                    <p className="position">Junior</p>
                    <ul className="member-social">
                      <li>Intagram</li>
                      <li>Facebook</li>
                    </ul>
                  </div>
                  <div className="member col-lg-4">
                    <div className="member-img overlay-member" style={image}></div>
                    <h3 className="member-name">Dimitrije Jankovic</h3>
                    <p className="position">Junior</p>
                    <ul className="member-social">
                      <li>Intagram</li>
                      <li>Facebook</li>
                    </ul>
                  </div>
                  <div className="member col-lg-4">
                    <div className="member-img overlay-member" style={image}></div>
                    <h3 className="member-name">Dimitrije Jankovic</h3>
                    <p className="position">Junior</p>
                    <ul className="member-social">
                      <li>Intagram</li>
                      <li>Facebook</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="spaceer"></div>

            </div>
        </div>
      </div>
    )
  }
}

export default About