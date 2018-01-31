import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class Footer extends React.Component{
    render() {
      return(
          <div id="footer-container">
            <div id="footer-inner-container">
              <a href="mailto:mckennach@gmail.com">
                <FontAwesome
                  className='footer-icon'
                  name='paper-plane'
                />
              </a>
              <a href="https://www.linkedin.com/in/chris-mckenna-a78638a7/" target="_blank">
                <FontAwesome
                  className='footer-icon'
                  name='linkedin-square'
                />
              </a>
              <a href="https://github.com/mckennach" target="_blank">
                <FontAwesome
                  className='footer-icon'
                  name='github'
                />
              </a>
              <a href="https://codepen.io/mckennach/" target="_blank">
                <FontAwesome
                  className='footer-icon'
                  name='codepen'
                />
              </a>
            </div>
          </div>
       );
    }
}
