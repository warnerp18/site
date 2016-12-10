import React, { Component } from 'react';
import { Link } from 'react-router';
import { PhotoSwipe } from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css';

import Menu from './menu';
import Footer from './footer';

export default class Work extends Component {
  componentDidMount(){
    const secondHand = document.querySelector('.second');
    const minuteHand = document.querySelector('.minute');
    const hoursHand = document.querySelector('.hour');
    const clock = document.querySelector('.clock');
    const container = document.querySelector('.clockContainer')
    let counter = {
      s: 0,
      m: 0,
      h: 0,
    }
let previous = null;
    function setDate(){
      const now = new Date();
      const seconds = now.getSeconds();
      const secondsDegree =  seconds * 6 ;
      const minutes = now.getMinutes();
      const minutesDegree = minutes * 6 ;
      const hours = now.getHours();
      const hoursDegree = hours % 12 / 12 * 360 + (minutesDegree / 12);
      if(previous){
        if(seconds < previous.s){
            counter.s += 1;
          }
        if(minutes < previous.m){
            counter.m += 1;
          }
        if(hours < previous.h){
            counter.h += 1;
          }

      }

      previous ={
        s: seconds,
        m: minutes,
        h: hours,
      };
      const rgb = {
         r: Math.floor(previous.s * 4.25),
         g: Math.floor(previous.m * 4.25),
         b: Math.floor(previous.h * 4.25),
      }
      secondHand.style.transform = `rotate(${secondsDegree + 360 * counter.s}deg)`;
      minuteHand.style.transform = `rotate(${minutesDegree + 360 * counter.m}deg)`;
      hoursHand.style.transform = `rotate(${hoursDegree + 360 * counter.h}deg)`;
      clock.style.border = `20px solid rgb(${rgb.r},${rgb.g},${rgb.b})`;
      container.style.background = `rgb(${rgb.b},${rgb.g},${rgb.r})`;
    }


    setInterval(setDate, 1000);
  }
  render() {
//const Work = (props) => {
    return (
      <div className='workComponent'>
        <Menu />
        <section >
          <div className='contain580 push60 workDescription'>
            <h1>My Work</h1>
            <p>Below is a sampling of both my own personal projects and work i've done professionally.</p>
           </div>
          <div className='work-container'>
            <div className='row float-left two-col'>
              <div className='imageContainer'>
                <p>A web app built with ES6, Meteor, React, & fuse.js. Built to track my workout progress. A web app that I plan to use in my life. To see the repo click <Link to='https://github.com/warnerp18/xFitTracker' target='_blank' style={{color: '#000', textDecoration: 'underline'}}><em>here</em></Link>.<br /><i style={{fontStyle: 'italic'}}>*This is a work in progress. I have a lot of features I still want to implement and things to improve</i></p>
                <Link to='https://dry-mesa-44199.herokuapp.com/' target='_blank'>
                  <img src='/images/wod.jpg'/>
                </Link>
              </div>
              <div className='imageContainer'>
                <p>Blog section for a Fortune 100 that I built and was succesfully integerated into it's site. Built with Drupal, PHP, Javascript, & Instagram's API.</p>
                <Link to='https://www.camdenliving.com/blog' target='_blank'>
                  <img src='/images/camdenblog.jpg'/>
                </Link>
              </div>
              <div className='imageContainer'>
                <p>A vanilla javascript clock that uses the hours, minutes, and seconds to give the background and clock border it's color.</p>
                <Link to='https://github.com/warnerp18/js-clock' target='_blank'>
                  <div className='clockContainer'>
                    <div className='clock'>
                      <div className='clock-face'>
                        <div className='hand hour'></div>
                        <div className='hand minute'></div>
                        <div className='hand second'></div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='imageContainer'>
                <p>Built with Drupal and PHP</p>
                <Link to='http://www.safetyvision.com' target='_blank'>
                  <img src='/images/sv.jpg'/>
                </Link>
              </div>
              <div className='imageContainer'>
                <p>Custom template I built which is now used on over 150 sites. Built with Drupal, PHP, & jQuery.</p>
                <Link to='http://liveseminoletrails.com/' target='_blank'>
                  <img src='/images/asset.jpg'/>
                </Link>
              </div>
              <div className='imageContainer'>
                <p>A web app built with Meteor and React. A live pastebin for HTML, CSS & JavaScript. Thid app mimicks sites such as JSBin and Code Bin</p>
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
                <p>My first professionally built site using Drupal and PHP.</p>
                <Link to='http://www.cityscapebrokers.com' target='_blank'>
                  <img src='/images/csb.jpg'/>
                </Link>
              </div>
              <div className='imageContainer'>
                <p>My final project during The Iron Yard. Using backbone.js, stripe.js, & firebase.</p>
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
                <p>A web app built with Meteor and React that mimicks the site bitly.com. It takes a link put in by a user and shortens the link.</p>
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

//export default Work;
