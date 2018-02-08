import React from 'react';
import {
  Link,
  NavLink
} from 'react-router-dom'



export default class NavPanel extends React.Component {
  constructor(){
    super();

  }

  toggleNav(event){
    const nav = document.getElementById('mobile-nav-container').classList;
    const app = document.getElementById('app').classList;
    const list = document.getElementById('nav-list').classList;
    console.log(nav);

    nav.toggle('open');
    app.toggle('open');
    list.toggle('open');
  }


  render(){

    return (
      <div id="nav-list" className="mobile-nav-panel">
        <nav className="mobile-nav-list">
          <ul>
            <li><NavLink exact to="/" onClick={this.toggleNav.bind(this)} activeClassName="active">home</NavLink></li>
            <li><NavLink exact to="/work" onClick={this.toggleNav.bind(this)} activeClassName="active">work</NavLink></li>
            <li><NavLink exact to="/contact" onClick={this.toggleNav.bind(this)} activeClassName="active">contact</NavLink></li>
          </ul>
        </nav>
      </div>
    );
  }
}
