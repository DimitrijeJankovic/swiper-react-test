import React, { Component } from 'react';
import '../index.css'

class About extends Component {

  render() {

    const image = {
      backgroundImage: 'url("images/portrate.jpg")'
    }

    return(
      <div className="about-container">
        <div className="overlay-darker"></div>
        <div className="bg" style={image}></div>
        <div className="about">
          <h2>Welcome to My site</h2>
          <h4>Some words about us</h4>
          <p>Praesent nec leo venenatis elit semper aliquet id ac enim. Maecenas nec mi leo. Etiam venenatis ut dui non hendrerit. Integer dictum, 
            diam vitae blandit accumsan, dolor odio tempus arcu, vel ultrices nisi nibh vitae ligula. Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Morbi varius lacinia vestibulum. Aliquam lobortis facilisis tellus, in facilisis ex vehicula ac. In malesuada quis turpis vel viverra.
          </p>
          <p>Praesent nec leo venenatis elit semper aliquet id ac enim. Maecenas nec mi leo. Etiam venenatis ut dui non hendrerit. Integer dictum, 
            diam vitae blandit accumsan, dolor odio tempus arcu, vel ultrices nisi nibh vitae ligula. Lorem ipsum dolor sit amet, consectetur adipiscing 
          </p>
        </div>
      </div>
    )
  }
}

export default About;