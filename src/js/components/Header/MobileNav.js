import React from 'react';
import {
  Link,
  NavLink
} from 'react-router-dom'



export default class MobileNav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toggleNav: this.props.toggleNav.bind(this),
      navToggled: this.props.navToggled,
      scrolled: false,
      mobileNavClass: 'mobile-nav-container'

    }


  }


  toggleNav(event){
    console.log(this.props);
    console.log(this.state.navToggled)

    if(this.state.navToggled){
      this.props.toggleNav(false);
    } else {
      this.props.toggleNav(true);
    }
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.scrolled) {
      this.setState({scrolled: true});
    } else {
      this.setState({scrolled: false});
    }
  }


  render(){

    console.log(this.props)

    return (
      <div id="mobile-nav-container" className={this.state.mobileNavClass}>
        <div onClick={this.state.toggleNav} id="nav-icon" className="nav-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}
