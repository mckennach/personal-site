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
          icon: '../../img/amatis-platforms.png',
          id: 1,
          type: 'Design / Front End Development'
        },
        {
          title: 'AML Entertainment',
          icon: '../../img/aml.png',
          id: 2,
          type: 'Design / Branding / Front End Developemnt'
        },
        {
          title: 'Charles P. Braman Real Estate Appraisals',
          icon: '',
          id: 3,
          type: 'Design / Branding / Front End Developemnt'

        },
      ]
  }


    render() {

      const component = this.projects.map((project) =>

        <div className="work-card" key={project.id} id={project.id}>
          <div className="work-card-img">
            <img className="work-card-icon" src={project.icon} />
          </div>
          <div className="work-card-overlay">
            <span className="work-card-title">{project.title}</span>
            <span className="work-card-type">{project.type}</span>
            <button>View Project <span className="arrow-right">→</span></button>
          </div>

        </div>




      )


      return(
          <div>
            {component}
          </div>
       );
    }
}
