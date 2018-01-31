import React from 'react';



import WorkComp from '../components/Work/WorkComp';


export default class Work extends React.Component{
    render() {

      return(

         <div className="page" id="work">
            <div className="page-container" id="work-container">
                <h2 className="page-title" id="greetings">Here's a couple of recent projects I have worked on</h2>
                <WorkComp match={this.props.match}/>


            </div>
         </div>
       );
    }
}
