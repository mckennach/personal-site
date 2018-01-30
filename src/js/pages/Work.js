import React from 'react';

import Contact from '../components/Contact';

import WorkComp from '../components/Work/WorkComp';


export default class Work extends React.Component{
    render() {

      return(
         <div id="work">
            <div id="work-container">
                <h2 id="greetings">Here's a couple of recent projects I have worked on</h2>
                <WorkComp id={'id'}/>

              <Contact />
            </div>
         </div>
       );
    }
}
