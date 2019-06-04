import React, { Component } from 'react';
import '../index.css'

class Main extends Component {
	
    render() {

      const data = {
        name: "Dika i Dada",
        date: "",
        backgroundImage: 'url("images/contact.jpg")'
      }



        return(
          <div className="row">
            <div className="col-md-12 galley-container">
              <div className="galley">
                <img src="images/portrate.jpg" alt="img" className="galley-img"/>
                <div className="galley-info">
                  <h1 className="galley-name">Dika i Dada</h1>
                  <p className="galley-date">09.07.2020</p>
                </div>
              </div>
              <div className="galley">
                <img src="images/img2.jpg" alt="img" className="galley-img"/>
                <div className="galley-info">
                  <h1 className="galley-name">Dika i Dada</h1>
                  <p className="galley-date">09.07.2020</p>
                </div>
              </div>
              <div className="galley">
                <img src="images/img3.jpg" alt="img" className="galley-img"/>
                <div className="galley-info">
                  <h1 className="galley-name">Dika i Dada</h1>
                  <p className="galley-date">09.07.2020</p>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Main