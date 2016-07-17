import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ImageGalleries extends Component {
  render() {
    return (
      <section className='image-galleries'>
        <Link to="" className='float-left'>
          <img src='/images/yellowstone/cubs.jpg' />
          <h2>Montana/YellowStone</h2>
          <span></span>
        </Link>
        <Link to="" className='float-left'>
          <img src='/images/nepal/everest1.jpg' />
          <h2>Nepal</h2>
          <span>A 3 week trip to Everest Base Camp and around Nepal</span>
        </Link>
        <Link to="" className='float-left'>
          <img src='/images/iceland/iceland1.jpg' />
          <h2>Iceland</h2>
          <span>One of my favorite countries I've ever visited.</span>
        </Link>
        <Link to="" className='float-left'>
          <img src='/images/kili/kili1.jpg' />
          <h2>Kilimanjaro</h2>
          <span>Summiting Kilimanjaro - 5,895 metres (19,341 ft)</span>
        </Link>
        <Link to="">
          <img src='' />
          <h2>Europe</h2>
          <span></span>
        </Link>
        <Link to="">
          <img src='' />
          <h2></h2>
          <span></span>
        </Link>
      </section>
    )
  }
}
