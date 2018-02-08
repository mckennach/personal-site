import React from 'react';
import {
  Link,
  NavLink
} from 'react-router-dom'



export default class MobileNav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      navToggled: false,
      scrolled: false,
      mobileNavClass: 'mobile-nav-container'

    }


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

  componentWillReceiveProps(nextProps) {

    if (nextProps.scrolled) {
      this.setState({scrolled: true});
    } else {
      this.setState({scrolled: false});
    }
  }


  render(){



    return (
      <div id="mobile-nav-container" className={this.state.mobileNavClass}>
        <div onClick={this.toggleNav.bind(this)} id="nav-icon" className="nav-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}
