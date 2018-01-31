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
    const navItems = [
      {
        name: 'home',
        path: '/'
      },
      {
        name: 'work',
        path: '/work'
      },
      {
        name: 'contact',
        path: '/contact'
      }
    ];
    var to = ''
    // only consider an event active if its event id is an odd number

    const oddEvent = (match, location) => {
        console.log(match);
        console.log(location);
    }

    const listItems = navItems.map((item) =>
    (
      <li key={item.name}>
        <NavLink
          activeClassName="active"
          exact to={item.path}
        >{item.name}</NavLink>
      </li>
    ));



    return (
      <div id='main-nav-container'>
        <nav id="nav-list">
          <ul>{listItems}</ul>
        </nav>
      </div>
    );
  }
}
