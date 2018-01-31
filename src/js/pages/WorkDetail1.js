import React from 'react';

import Paragraph from '../components/Paragraph';



export default class WorkDetail1 extends React.Component{
    render() {
    
      return(
         <div className="page" id="amatis">
          <div className="page-container" id="amatis-container">
            <div id="amatis-img" className="page-img">
              <img className="amatis-page-image" src="../../img/amatis.png"/>
            </div>
            <Paragraph

              className="paragraph"
              title={'Project Background'}
              secondTitle={'App Description:'}
              paragraphStyle={'italic'}
              text={"This App interfaces with the Amatis Controls Lighting system to give the user extremely quick and responsive control over their lighting."}
            />


            <Paragraph

              className="paragraph"
              title={false}
              secondTitle={'My Role:'}
              text={"After I graduated from the University of Colorado at Boulder I was hired by Amatis Controls as a Front End Developer. My main role was to help design and develop for the UX for the Amatis Controls application. I worked closely with project stakeholders and other employees to maintain stability and user flow across multiple platforms."}
            />

            <Paragraph

              className="paragraph"
              title={false}
              secondTitle={false}
              text={"To maintain a smooth UX/UI I had to conduct research based on current trends in UX/UI design and trends of our own users. Then with the help of other employees, I had to design and develop these ideas to make a high quality product."}
            />

            <div id="amatis2-img" className="page-img">
              <img src="../../img/amatis-platforms.png"/>
            </div>

            <Paragraph

              className="paragraph"
              title={false}
              secondTitle={'Technology/Languages Used:'}
              text={"HTML, CSS, JavaScript, jQuery, XCode, Cordova and (some) PHP."}
            />

          </div>

         </div>
       );
    }
}
