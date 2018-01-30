import React from 'react';
import {
  Link,
  NavLink
} from 'react-router-dom'



export default class MobileNav extends React.Component {
  constructor(){
    super();
  }



  render(){
    const navItems = ['home', 'work', 'résumé'];
    var to = ''
    const listItems = navItems.map((item) =>
      <li key={item}>
        <NavLink
          to={item}
        >{item}</NavLink>
      </li>
    );

    return (
      <div id='main-nav-container'>
        <nav id="nav-list">
          <ul>{listItems}</ul>
        </nav>
      </div>
    );
  }
}
