import React, { Component } from 'react';
import { Link } from 'react-router';
import { PhotoSwipe } from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css';

import Menu from './menu';
import Footer from './footer';

export default class Work extends Component {
  renderGallery(e){
    console.log(e);

    let isOpen = true;

    let items = [
      {
        src: 'https://scontent.fhou1-2.fna.fbcdn.net/t31.0-8/13568858_895274680665_2236933832197678919_o.jpg',
        w: 1200,
        h: 900,
        title: 'Image 1'
      },
      {
        src: 'http://lorempixel.com/1200/900/sports/2',
        w: 1200,
        h: 900,
        title: 'Image 2'
      }
    ];

    let options = {
      //http://photoswipe.com/documentation/options.html
    };

    handleClose = () => {
      isOpen: false
    };
    return(
      <PhotoSwipe isOpen={isOpen} items={items} options={options} onClose={handleClose}/>
    )
  }

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
            <div className='row float-left two-col'>
              <div className='imageContainer'>
                <p>Blog section for a Fortune 100 that I built and was succesfully integerated into it's site. Built with Drupal, PHP, Javascript, & Instagram's API.</p>
                <Link to='https://www.camdenliving.com/blog' target='_blank'>
                  <img src='/images/camdenblog.jpg'/>
                </Link>
              </div>
              <div className='imageContainer'>
                <p>Built with Drupal and PHP</p>
                <Link to='http://www.safetyvision.com' target='_blank'>
                  <img src='/images/sv.jpg'/>
                </Link>
              </div>
              <div className='imageContainer'>
                <p>Custome template I built which is now used to on over 150 sites. Built with Drupal, PHP, & jQuery.</p>
                <Link to='http://liveseminoletrails.com/' target='_blank'>
                  <img src='/images/asset.jpg'/>
                </Link>
              </div>
              <div className='imageContainer'>
                <p>A web app built with Meteor and React. Built to track my workout progress. A web app that I really plan on using in my life.</p>
                <Link to='https://github.com/warnerp18/xFitTracker' target='_blank'>
                  <img src='/images/wod.jpg'/>
                </Link>
              </div>
              <div className='imageContainer'>
                <p>A web app built with Meteor and React. Built to track my workout progress. A web app that I really plan on using in my life.</p>
                <Link to='https://github.com/warnerp18/markbin' target='_blank'>
                  <img src='/images/markbin.jpg'/>
                </Link>
              </div>
            </div>
            <div className='row float-left two-col last'>
              <div className='imageContainer'>
                <p>A website for a local bank in and around the Houston area. Built with Drupal and PHP.</p>
                <Link to='https://www.texasgulfbank.com' target='_blank'>
                  <img src='/images/tgb.jpg'/>
                </Link>
              </div>
              <div className='imageContainer'>
                <p>My first professionaly built site using Drupal and PHP.</p>
                <Link to='http://www.cityscapebrokers.com' target='_blank'>
                  <img src='/images/csb.jpg'/>
                </Link>
              </div>
              <div className='imageContainer'>
                <p>My final project during The Iron Yard.Using backbone.js, stripe.js, & firebase.</p>
                <Link to='https://warnerp18.github.io/Final-Project/' target='_blank'>
                  <img src='/images/fp.jpg'/>
                </Link>
              </div>
              <div className='imageContainer'>
                <p>A web app built with Meteor and React. This web app uses the Imigur API to pull in images, title, and the image ranking based off of likes and dislikes.</p>
                <Link to='https://github.com/warnerp18/images' target='_blank'>
                  <img src='/images/imigur.jpg'/>
                </Link>
              </div>
              <div className='imageContainer'>
                <p>A web app built with Meteor and React. A web app that mimicks the site bitly.com. That takes a link put in by a user and shortens the link.</p>
                <Link to='https://github.com/warnerp18/linkshortener' target='_blank'>
                  <img src='/images/linkshortener.jpg'/>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}
