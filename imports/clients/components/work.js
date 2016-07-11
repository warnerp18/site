import React, { Component } from 'react';
import { Link } from 'react-router';

import Menu from './menu';

export default class Work extends Component {
  render() {
    return (
      <div className='workComponent'>
        <Menu />
        <section >
          <div className='contain580 push60 workDescription'>
            <h1>My Work</h1>
            <p>Below is a sampeling of both my own personal projects and work i've done professionally.</p>
           </div>
          <div className='work-container'>
            <div className='row thirds row-1'>
              <div className='imageContainer'>
                <p>Blog section for a Fortune 100 that I built and was succesfully integerated into it's site. Built with Drupal, PHP, Javascript, & Instagram's API.</p>
                <Link to='https://www.camdenliving.com/blog' target='_blank'>
                  <img src='/images/camdenblog.png'/>
                </Link>
              </div>
              <div className='imageContainer'>
                <p>Built with Drupal and PHP</p>
                <Link to='http://www.safetyvision.com' target='_blank'>
                  <img src='/images/sv.png'/>
                </Link>
              </div>
            </div>
            <div className='row thirds row-2'>
              <div className='imageContainer'>
                <p>A website for a local bank in and around the Houston area. Built with Drupal and PHP.</p>
                <Link to='https://www.texasgulfbank.com' target='_blank'>
                  <img src='/images/tgb.png'/>
                </Link>
              </div>
              <div className='imageContainer'>
                <p>My first professionaly built site using Drupal and PHP.</p>
                <Link to='http://www.cityscapebrokers.com' target='_blank'>
                  <img src='/images/csb.png'/>
                </Link>
              </div>
            </div>
            <div className='row thirds row-3'>
              <div className='imageContainer'>
                <p>Custome template I built which is now used to on over 150 sites. Built with Drupal, PHP, & jQuery.</p>
                <Link to='http://liveseminoletrails.com/' target='_blank'>
                  <img src='/images/asset.png'/>
                </Link>
              </div>
              <div className='imageContainer'>
                <p>My final project during The Iron Yard.Using backbone.js, stripe.js, & firebase.</p>
                <Link to='https://warnerp18.github.io/Final-Project/' target='_blank'>
                  <img src='/images/fp.png'/>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
