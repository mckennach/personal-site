import React from 'react';

import Footer from '../components/Footer';

import WorkComp from '../components/Work/WorkComp';


export default class Work extends React.Component{
    render() {

      return(
<<<<<<< HEAD
         <div className="page" id="work">
            <div className="page-container" id="work-container">
                <h2 className="page-title" id="greetings">Here's a couple of recent projects I have worked on</h2>
                <WorkComp match={this.props.match}/>
              <Footer/>
=======
         <div id="work">
            <div id="work-container">
                <h2 className="page-header">A list of projects that I have or am currently working on</h2>
                <WorkComp/>

              <Contact />
>>>>>>> develop
            </div>
         </div>
       );
    }
}
