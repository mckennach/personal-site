import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class Contact extends React.Component{
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
              <a href="https://github.com/mckennach" target="_blank">
                <FontAwesome
                  className='contact-icon'
                  name='github'
                />
              </a>
              <a href="https://codepen.io/mckennach/" target="_blank">
                <FontAwesome
                  className='contact-icon'
                  name='codepen'
                />
              </a>
            </div>
          </div>
       );
    }
}
