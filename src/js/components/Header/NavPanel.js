import React from 'react';
import {
  Link,
  NavLink
} from 'react-router-dom'



export default class NavPanel extends React.Component {
  constructor(){
    super();

  }




  render(){

    return (
      <div id="nav-list" className="mobile-nav-panel">
        <nav className="mobile-nav-list">
          <ul>
            <li><NavLink exact to="/" activeClassName="active">home</NavLink></li>
            <li><NavLink exact to="/work" activeClassName="active">work</NavLink></li>
            <li><NavLink exact to="/contact" activeClassName="active">contact</NavLink></li>
          </ul>
        </nav>
      </div>
    );
  }
}
