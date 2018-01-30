import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom'

//Pages
import Home from './Home';
import Work from './Work';
import WorkDetail1 from './WorkDetail1';

//Components
import Header from '../components/Header/Header';





export default class App extends React.Component{
    constructor(){
      super();
      this.state = {
        isMobile: false,
        width: window.innerWidth,
        height: window.innerHeight,
        workDetail: 'amatis'
      }
    }

    /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    if(window.innerWidth < 500) {
      this.setState({ width: 450, height: 102 });
    } else {
      let update_width  = window.innerWidth-100;
      let update_height = Math.round(update_width/4.4);
      this.setState({ width: update_width, height: update_height });
    }
    this.isMobile();
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  isMobile(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || this.state.width < 540) {
     this.setState({isMobile: true});
   } else {
     this.setState({isMobile: false});
   }
  }



    render() {
      console.log('hello');
      return(
          <Router>
            <div id="app">
              <Header isMobile={this.state.isMobile} title={'CM'}/>
              <Route exact path='/' render={() => (
                  <Redirect to="/home"/>
              )}/>
              <Route path='/home' component={Home}/>
              <Route path='/work' render={() => (
                <Work workDetail={this.state.workDetail} match={{ params: { id: 0 }, url: '' }}/>
              )}/>
              <Route path='/amatis' component={WorkDetail1}/>





            </div>
          </Router>
       );
    }
}
