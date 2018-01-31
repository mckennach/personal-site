import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class Footer extends React.Component{
    render() {
      return(
          <div id="contact-container">
            <div id="contact-inner-container">
              <a href="mailto:mckennach@gmail.com">
                <FontAwesome
                  className='contact-icon'
                  name='paper-plane'
                />
              </a>
              <a href="https://www.linkedin.com/in/chris-mckenna-a78638a7/" target="_blank">
                <FontAwesome
                  className='contact-icon'
                  name='linkedin-square'
                />
              </a>
              <a href="https://twitter.com/creeesmckenna" target="_blank">
                <FontAwesome
                  className='contact-icon'
                  name='twitter'
                />
              </a>
            </div>
          </div>
       );
    }
}
