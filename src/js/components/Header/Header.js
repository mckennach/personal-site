import React from 'react';


import Title from './Title'
import MobileNav from './MobileNav'
import Nav from './Nav'
import Logo from './Logo'


export default class Header extends React.Component {
  constructor(){
    super();
  }

  render(){
    var nav;
    console.log(this.props);
    if(this.props.isMobile){
      nav = <MobileNav toggleNav={this.props.toggleNav.bind(this)} navToggled={this.props.navToggled} scrolled={this.props.scrolled} />
    } else {
      nav = <Nav />
    }




    return (
      <header id="app-header">

        <Title title={this.props.title}/>
        {nav}
      </header>
    );
  }
}
