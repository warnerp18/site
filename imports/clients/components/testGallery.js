import React, { Component } from 'react';

import {PhotoSwipeGallery} from 'react-photoswipe';


export default class TestGallery extends Component{

  render() {

    let items = [
      {
        src: '/images/iceland/iceland4.jpg',
        thumbnail: '/images/iceland/iceland4.jpg',
        w: 1200,
        h: 900,
        title: 'Image 1'
      },
      {
        src: '/images/iceland/iceland5.jpg',
        thumbnail: '/images/iceland/iceland5.jpg',
        w: 1200,
        h: 900,
        title: 'Image 1'
      },
      {
        src: '/images/iceland/iceland6.jpg',
        thumbnail: '/images/iceland/iceland6.jpg',
        w: 1200,
        h: 900,
        title: 'image 1'
      },
      {
        src: '/images/iceland/iceland7.jpg',
        thumbnail: '/images/iceland/iceland7.jpg',
        w: 1200,
        h: 900,
        title: 'image 1'
      },
      {
        src: '/images/iceland/iceland8.jpg',
        thumbnail: '/images/iceland/iceland8.jpg',
        w: 1200,
        h: 900,
        title: 'image 1'
      },
      {
        src: '/images/iceland/iceland9.jpg',
        thumbnail: '/images/iceland/iceland9.jpg',
        w: 1200,
        h: 900,
        title: 'image 1'
      },
      {
        src: '/images/iceland/iceland10.jpg',
        thumbnail: '/images/iceland/iceland10.jpg',
        w: 1200,
        h: 900,
        title: 'image 1'
      },
      {
        src: '/images/iceland/iceland11.jpg',
        thumbnail: '/images/iceland/iceland11.jpg',
        w: 1200,
        h: 900,
        title: 'image 1'
      },
      {
        src: '/images/iceland/iceland12.jpg',
        thumbnail: '/images/iceland/iceland12.jpg',
        w: 1200,
        h: 900,
        title: 'image 1'
      },
      {
        src: '/images/iceland/iceland13.jpg',
        thumbnail: '/images/iceland/iceland13.jpg',
        w: 1200,
        h: 900,
        title: 'image 1'
      },
      {
        src: '/images/iceland/iceland14.jpg',
        thumbnail: '/images/iceland/iceland14.jpg',
        w: 1200,
        h: 900,
        title: 'image 1'
      },
      {
        src: '/images/iceland/iceland15.jpg',
        thumbnail: '/images/iceland/iceland15.jpg',
        w: 1200,
        h: 900,
        title: 'image 1'
      },
      {
        src: '/images/iceland/iceland16.jpg',
        thumbnail: '/images/iceland/iceland16.jpg',
        w: 1200,
        h: 900,
        title: 'image 1'
      },
      {
        src: '/images/iceland/iceland17.jpg',
        thumbnail: '/images/iceland/iceland17.jpg',
        w: 1200,
        h: 900,
        title: 'image 1'
      },
      {
        src: '/images/iceland/iceland18.jpg',
        thumbnail: '/images/iceland/iceland18.jpg',
        w: 1200,
        h: 900,
        title: 'image 1'
      },
      {
        src: '/images/iceland/iceland19.jpg',
        thumbnail: '/images/iceland/iceland19.jpg',
        w: 1200,
        h: 900,
        title: 'image 1'
      },
      {
        src: '/images/iceland/iceland20.jpg',
        thumbnail: '/images/iceland/iceland20.jpg',
        w: 1200,
        h: 900,
        title: 'image 1'
      },
      {
        src: '/images/iceland/iceland21.jpg',
        thumbnail: '/images/iceland/iceland21.jpg',
        w: 1200,
        h: 900,
        title: 'image 1'
      },
      {
        src: '/images/iceland/iceland22.jpg',
        thumbnail: '/images/iceland/iceland22.jpg',
        w: 1200,
        h: 900,
        title: 'image 1'
      },
      {
        src: '/images/iceland/iceland23.jpg',
        thumbnail: '/images/iceland/iceland23.jpg',
        w: 1200,
        h: 900,
        title: 'image 1'
      },
      {
        src: '/images/iceland/iceland24.jpg',
        thumbnail: '/images/iceland/iceland24.jpg',
        w: 1200,
        h: 900,
        title: 'image 1'
      },
    ];

    let options = {
      //http://photoswipe.com/documentation/options.html
    };

    getThumbnailContent = (item) => {
      return (
        <img src={item.thumbnail} width={300} />
      );
    }
    return (
      <PhotoSwipeGallery items={items} options={options} thumbnailContent={getThumbnailContent}/>
    )
  }

}
