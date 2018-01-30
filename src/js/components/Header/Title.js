import React from 'react';
import {
  Link,
} from 'react-router-dom'


export default class Title extends React.Component {
  constructor(){
    super();
  }
  render(){

    return (
      <Link to="/">
        
        <h1>{this.props.title}</h1>
      </Link>
    );
  }
}
