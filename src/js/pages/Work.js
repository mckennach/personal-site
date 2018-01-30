import React from 'react';

import Contact from '../components/Contact';

import WorkComp from '../components/Work/WorkComp';


export default class Work extends React.Component{
    render() {

      return(
         <div id="work">
            <div id="work-container">
                <h2 className="page-header">A list of projects that I have or am currently working on</h2>
                <WorkComp/>

              <Contact />
            </div>
         </div>
       );
    }
}
