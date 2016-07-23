import React, { Component } from 'react';

import Menu from './menu';
import Footer from './footer';


export default class Front extends Component {

  scrollToNextSection(){
    $('html, body').animate({
        scrollTop: $(".aboutme").offset().top
    }, 1500);
    e.preventDefault();
  }

  render(){
    return (
    <div>
      <Menu />
      <section className='header-image'>
        <div className='text-container'>
                <h1>I am Phil</h1><br />
                <h2>I love to code & and backpack</h2>
                <a href='#' onClick={this.scrollToNextSection}>read more</a>
        </div>
      </section>
      <section className='aboutme contain580 push60'>
          <span>My</span>
          <b> name is Phil Warner</b>.
          <p>I started programming two years ago. I attended the Iron Yard's Front End Engineering course in Houston, TX in September 2014. While attending The Iron Yard I learned the basics of HTML5, CSS3, and Javascript. I’m proficient in Drupal 7 and am building modules to support Drupal 8. Outside of work I have been teaching myself Meteor and React using resources such as egghead.io, leveluptutorials.com, themeteorchef.com, meteor.com, & facebook.github.io/react.</p>
        <div className='seperator push60'></div>
        <div className='contain580'>
          <p>Like most developers that come out of a programming bootcamp, my path into the programing world started somewhere completely different.</p>
          <p>I grew up a military brat. I was born in a small German town and have since then been traveling the world. During my Sophomore year at The Citadel in Charleston, SC, I left for my first of two deployments to Afghanistan. After my second deployment I returned to The Citadel and graduated in 2010.</p>
          <p>I spent the next four years traveling to over 35 countries and working overseas. During my travels, I came across an article explaining the demand for developers and their impact in the future. This article pointed me to codecademy.com. My love for coding started at Codecademy and my desire to learn more has only grown.</p>
        </div>
      </section>
      <Footer />
    </div>
    )
  }
}
