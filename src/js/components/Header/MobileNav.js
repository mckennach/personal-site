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
    navButton.classList.toggle("open");
    navOverlay.classList.toggle("open");

  }

  render(){
    const navItems = ['about', 'work', 'résumé'];
    const listItems = navItems.map((item) =>
      <li key={item}>
        <NavLink
          to={item}
          activeClassName="active-nav"
        >{item}</NavLink>
      </li>
    );

    return (
      <div id='mobile-nav-container'>
        <div onClick={this.toggleNav.bind(this)} id="nav-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav id="mobile-nav-list">
          <ul>{listItems}</ul>
        </nav>





      </div>
    );
  }
}
