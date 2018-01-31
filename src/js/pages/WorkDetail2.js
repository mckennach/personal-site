import React from 'react';

import Paragraph from '../components/Paragraph';



export default class WorkDetail2 extends React.Component{
    render() {
      var app = document.getElementById('app');
      if(app){
        app.scrollTo(0, 0);
      }
      return(
         <div className="page" id="amatis">
          <div className="page-container" id="amatis-container">
            <div id="aml-img" className="page-img">
              <h1  className="aml-header-title">AML</h1>
              <h1  className="aml-sub-header-title">entertainment</h1>
            </div>
            <Paragraph
              className="paragraph"
              title={'Project Background'}
              secondTitle={'Website Description:'}
              paragraphStyle={'italic'}
              text={"AML Entertainment is an independent business based in Denver, CO offering professional services in marketing, social media coordination and merchandising."}
            />


            <Paragraph

              className="paragraph"
              title={false}
              secondTitle={'My Role:'}
              text={"I made this website for a friend's business. She wanted it to be a simple, informational site with an easy way to get in contact with her. Once I was given all the content for the website I came up with a basic design and developed it."}
            />

            <div id="amatis2-img" className="page-img">
              <img src="../../img/aml-platforms.png"/>
            </div>

            <Paragraph

              className="paragraph"
              title={false}
              secondTitle={'Technology/Languages Used:'}
              text={"HTML, CSS, JavaScript and jQuery."}
            />
        
          </div>

         </div>
       );
    }
}
