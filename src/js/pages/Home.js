import React from 'react';

import Contact from '../components/Contact';
import Paragraph from '../components/Paragraph';

export default class Home extends React.Component{
    render() {
      var today = new Date()
      var curHr = today.getHours();
      var timeOfDay
      if (curHr < 12) {
        timeOfDay = 'Morning'
      } else if (curHr < 18) {
        timeOfDay = 'Afternoon'
      } else {
        timeOfDay = 'Evening'
      }
      return(
         <div id="about">

            <div id="about-container">
              <h2 id="greetings">Hello, my name is Chris. I am a Front End Developer / Designer living in Denver, CO</h2>
              <div id="about-photo"></div>
              <Paragraph
                id="about-inner-container"
                className="paragraph"
                title={'About Me'}
                secondTitle={false}
                text={"I'm currently doing freelance web design/UX design in Denver, Colorado, but am planning to pursue my career as an UX engineer in Chicago, Illinois. Outside of work I am an avid musician and sound designer. Feel free to contact me. Would love to grab a beer and get you know you!"}
              />

              <Paragraph
                id="skills-container"
                className="paragraph"
                title={'Skills'}
                secondTitle={'Front End Development'}
                text={"Front End Development is building the user interface of a website or application. Tools such as HTML, CSS and the many different available Javascript frameworks allow me to be build fast, interactive and cross-platform websites/applications."}
              />

              <Paragraph
                id="skills-container2"
                className="paragraph"
                title={false}
                secondTitle={'UX/UI Design'}
                text={"UI/UX involves planning and structuring a site's layout. Once the proper information architecture is in place, I design the visual layer to create a beautiful user experience."}
              />

              <Paragraph
                id="skills-container3"
                className="paragraph"
                title={false}
                secondTitle={'Brand identity'}
                text={"Whether it be helping design the brand or taking an already designed brand, having a beautifully designed website or application can bring the brand to life."}
              />

              <Contact />
            </div>
         </div>
       );
    }
}
