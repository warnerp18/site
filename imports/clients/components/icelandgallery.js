import React, { Component } from 'react';

import {PhotoSwipeGallery} from 'react-photoswipe';

import IcelandItems from '../../servers/trip/iceland';

export default class IcelandGallery extends Component {
  render() {


    let options = {
      //http://photoswipe.com/documentation/options.html
      //mainClass: ".testing"
    };

    getThumbnailContent = (item) => {
      return (
        <img src={item.thumbnail} width={300} />
      );
    }
    return (
      <div className='gallery-page iceland-gallery-page'>
        <section className='header-image iceland'>
          <div className='header'></div>
        </section>
        <h1>Iceland</h1>
        <PhotoSwipeGallery items={IcelandItems} options={options} thumbnailContent={getThumbnailContent}/>
      </div>
    )
  }
}
