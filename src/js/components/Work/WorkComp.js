import React from 'react';
import FontAwesome from 'react-fontawesome';
import WorkIcon from './WorkIcon';


const workArray = [
  {
    icon: '../../img/android-icon.png',
    id: 'amatis',
    desc: 'this will be a desc'
  },
  {
    icon: '../../img/aml.png',
    id: 'aml',
    desc: 'this will be a desc'
  },
  {
    icon: '../../img/straw.png',
    id: 'straw',
    desc: 'this will be a desc'
  },
];




export default class WorkComp extends React.Component{

  constructor(){
      super();
  }



    render() {

      return(
        <div className="work-component">
          <WorkIcon />
          <h1>Amatis Controls</h1>
          <p></p>
        </div>
       );
    }
}
