import React, { Component } from 'react';
import '../index.css'

class Contact extends Component {

  render() {

    const image = {
      backgroundImage: 'url("images/contact.jpg")'
    }

    return(
      <div className="contact-page">
        <div className="overlay"></div>
        <div className="bg" style={image}></div>
        <div className="contact">
            <h2>Our Contacts</h2>
            <p>Praesent nec leo venenatis elit semper aliquet id ac enim. Maecenas nec mi leo. 
                Etiam venenatis ut dui non hendrerit. Integer dictum, diam vitae blandit accumsan, 
                dolor odio tempus arcu, vel ultrices nisi nibh vitae ligula.
            </p>
            <div className="contact-details">
                <ul>
                    <li><span>Mail:</span>dsadsadasda</li>
                    <li><span>Phone:</span>445656446464</li>
                </ul>
            </div>
        </div>
        <div className="contact-form">
            <h4>Get in Touch</h4>
            <div className="form">
                <form>
                    <input name="name" type="text" className="rtnsinp" placeholder="Name"/>
                    <input name="email" type="text" className="rtnsinp" placeholder="Email"/>
                    <input name="phone" type="text" className="rtnsinp" placeholder="Phone"/>
                    <textarea name="message" className="rtnsinp" placeholder="Message"></textarea>
                    <button className="submit" type="submit">Send Message</button>
                </form>
            </div>
        </div>
      </div>
    )
  }
}

export default Contact