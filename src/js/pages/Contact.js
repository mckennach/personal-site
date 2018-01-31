import React from 'react';
import FontAwesome from 'react-fontawesome';
import Footer from '../components/Footer';

export default class Contact extends React.Component{
    render() {
      return(
        <div className="page" id="contact">
          <div className="page-container" id="contact-container">
            <form action="mailto:mckennach@gmail.com" method="post" encType="text/plain">
              Name:<br/>
              <input type="text" name="name"/><br/>
              E-mail:<br/>
              <input type="text" name="mail"/><br/>
              Comment:<br/>
              <input type="text" name="comment" size="50"/><br/><br/>
              <input type="submit" value="Send"/>
              <input type="reset" value="Reset"/>
            </form>
          </div>
        </div>
       );
    }
}
