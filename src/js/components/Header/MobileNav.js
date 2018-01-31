import React from 'react';
import {
  Link,
  NavLink
} from 'react-router-dom'



export default class MobileNav extends React.Component {
  constructor(){
    super();
  }

  toggleNav(event){
    const navButton = document.getElementById('nav-icon');
    const navOverlay = document.getElementById('nav-list');
    const app = document.getElementById('app');
    navButton.classList.toggle("open");
    navOverlay.classList.toggle("open");
    app.classList.toggle("open");
  }

  render(){



    return (
      <div className='mobile-nav-container'>
        <div onClick={this.toggleNav.bind(this)} id="nav-icon" className="nav-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}
