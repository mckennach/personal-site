import React from 'react';
import FontAwesome from 'react-fontawesome';
import Footer from '../components/Footer';

export default class Contact extends React.Component{
    render() {
      return(
        <div className="page" id="contact">
          <div className="page-container" id="contact-container">
              <h1 className="page-title">Contact</h1>
              <div className="caption-container">
                <a href="tel:440-552-781" ><span>(440) 552-7481</span></a>
                <br/>
                <a href="mailto:mckennach@gmail.com"><span className="middle-cap">mckennach@gmail.com</span></a>
                <br/>
                <a href="../../img/resume-1.pdf" target="_blank" download><span className="bottom-cap">resume</span></a>

              </div>

              <div className="icon-container">
                <div className='contact-icon'>
                  <a href="tel:440-552-781" >
                    <FontAwesome

                      name='phone'
                    />
                  </a>
                </div>

                <div className='contact-icon'>
                  <a href="mailto:mckennach@gmail.com" >
                    <FontAwesome
                      name='paper-plane'
                    />
                  </a>
                </div>

                <div className='contact-icon'>
                  <a href="../../img/resume-1.pdf" target="_blank" download>
                    <FontAwesome
                      name='file'
                    />
                  </a>
                </div>
              </div>
          </div>
        </div>
       );
    }
}
