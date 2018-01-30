import React from 'react';


export default class Title extends React.Component {
  constructor(){
    super();
  }
  render(){
    var title = ''
    if(this.props.title){
      title = this.props.title
    }

    var secondTitle = ''
    if(this.props.secondTitle){
      secondTitle = this.props.secondTitle
    }

    return (
      <div className={this.props.className} id={this.props.id}>
        <h1>{title}</h1>
        <h2>{secondTitle}</h2>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
