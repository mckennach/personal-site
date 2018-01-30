import React from 'react';
import ImageLoader from 'react-load-image';

export default class ProfPic extends React.Component{
    render() {
      return(
        <ImageLoader src={this.props.src} >
          <img id={this.props.id} />
          <div>Error!</div>
        </ImageLoader>
       );
    }
}
