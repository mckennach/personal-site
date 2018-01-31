import React from 'react';
import FontAwesome from 'react-fontawesome';
import WorkIcon from './WorkIcon';
import Paragraph from '../Paragraph';
import {

  NavLink,

} from 'react-router-dom'


export default class WorkComp extends React.Component{

  constructor(){
      super();
      this.projects = [
        {
          title: 'Amatis Controls',
          icon: '../../img/amatis.png',
          alt: "work-card-1",
          path: '/amatis',
          id: 1,
          type: 'Design / Front End Development',
          style: {
            backgroundColor: 'black'
          }
        },
        {
          title: 'AML Entertainment',
          icon: '../../img/aml.png',
          alt: "work-card-2",
          path: '/aml',
          id: 2,
          type: 'Design / Branding / Front End Developemnt',
          style: {
            overflow: 'hidden',
            backgroundSize: 'cover',

          }
        },
        {
          title: 'Charles P. Braman & Co., Inc.',
          icon: '../../img/cpbco-logo.png',
          path: '/cpbco',
          alt: "work-card-3",
          id: 3,
          type: 'Design / Branding / Front End Developemnt',
          style: {
            
          }


        },
      ]
  }


    render() {

      const component = this.projects.map((project) =>

        <div style={project.style} className="work-card" key={project.id} id={project.alt}>
          <div className="work-card-img">
            <img className="work-card-icon" src={project.icon} />
          </div>
          <div className="work-card-overlay">
            <span className="work-card-title">{project.title}</span>
            <span className="work-card-type">{project.type}</span>
            <NavLink to={project.path}><button>View Details <span className="arrow-right">→</span></button></NavLink>
          </div>

        </div>




      )


      return(
          <div className="work-card-container">
            {component}
          </div>
       );
    }
}
