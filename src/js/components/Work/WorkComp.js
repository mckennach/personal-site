import React from 'react';
import FontAwesome from 'react-fontawesome';
import WorkIcon from './WorkIcon';
import Paragraph from '../Paragraph';


export default class WorkComp extends React.Component{

  constructor(){
      super();
      this.projects = [
        {
          title: 'Amatis Controls',
          secondTitle: 'Shortshort',
          icon: '../../img/android-icon.png',
          id: 1,
          desc: 'This App interfaces with the Amatis Controls Lighting system to give the user extremely quick and responsive control over their lighting.'
        },
        {
          title: 'AML Entertainment',
          icon: '../../img/aml.png',
          id: 2,
          desc: 'this will be a desc'
        },
        {
          title: 'Charles P. Braman Real Estate Appraisals',
          icon: '../../img/straw.png',
          id: 3,
          desc: 'this will be a desc..'
        },
      ]
  }


    render() {

      const component = this.projects.map((project) =>



      <Paragraph
        key={project.id}
        id={project.id}
        className="paragraph"
        title={project.title}
        secondTitle={project.title}
        text={project.desc}
      />


      )


      return(
          <div>
            {component}
          </div>
       );
    }
}
