import React from 'react';
import FontAwesome from 'react-fontawesome';
import WorkIcon from './WorkIcon';
import Paragraph from '../Paragraph';
<<<<<<< HEAD
import {

  NavLink,

} from 'react-router-dom'
=======
>>>>>>> develop


export default class WorkComp extends React.Component{

  constructor(){
      super();
      this.projects = [
        {
          title: 'Amatis Controls',
<<<<<<< HEAD
          icon: '../../img/amatis.png',
          alt: "work-card-1",
          path: '/amatis',
          id: 1,
          type: 'Design / Front End Development',
          style: {
            backgroundColor: 'black'
          }
=======
          secondTitle: 'Shortshort',
          icon: '../../img/android-icon.png',
          id: 1,
          desc: 'This App interfaces with the Amatis Controls Lighting system to give the user extremely quick and responsive control over their lighting.'
>>>>>>> develop
        },
        {
          title: 'AML Entertainment',
          icon: '../../img/aml.png',
<<<<<<< HEAD
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


=======
          id: 2,
          desc: 'this will be a desc'
        },
        {
          title: 'Charles P. Braman Real Estate Appraisals',
          icon: '../../img/straw.png',
          id: 3,
          desc: 'this will be a desc'
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
>>>>>>> develop


      )


      return(
<<<<<<< HEAD
          <div className="work-card-container">
=======
          <div>
>>>>>>> develop
            {component}
          </div>
       );
    }
}
