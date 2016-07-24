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
      <section className='contain580 push60 aboutme'>
      <div className='push60'>
        <p>
          <span>My</span>
          <b> name is Phil Warner. </b>
          I started programming two years ago. I attended the Iron Yard's Front End Engineering course in Houston, TX in September 2014. While attending The Iron Yard I learned the basics of HTML5, CSS3, and Javascript. I’m proficient in Drupal 7 and am building modules to support Drupal 8. Outside of work I have been teaching myself Meteor and React using resources such as <a href='https://www.egghead.io' target='_blank'>egghead.io</a>, <a href='https://leveluptutorials.com' target='_blank'>leveluptutorials.com</a>, <a href='https://themeteorchef.com' target='_blank'>themeteorchef.com</a>, <a href='https://meteor.com' target='_blank'>meteor.com</a>, & <a href='https://facebook.github.io/react' target='_blank'>facebook.github.io/react</a>.</p>
      </div>
        <div className='seperator push60'></div>
        <div>
          <p>Like most developers that come out of a programming bootcamp, my path into the programing world started somewhere completely different.</p>
          <p>I grew up a military brat. I was born in a small German town and have since then been traveling the world. During my Sophomore year at The Citadel in Charleston, SC, I left for my first of two deployments to Afghanistan. After my second deployment I returned to The Citadel and graduated in 2010.</p>
          <p>I spent the next four years traveling to over 35 countries and working overseas. During my travels, I came across an article explaining the demand for developers and their impact in the future. This article pointed me to codecademy.com. My love for coding started at Codecademy and my desire to learn more has only grown.</p>
            <p>I began my coding career at The Iron Yard where we began by learning the basics of HTML and CSS and SCSS. We moved on quickly and started to learn Javascript. After 12 weeks I had made multiple single page applications using APIs from Four Square, Firebase, & Stripe. After graduating from The Iron Yard I was hired by current employer and began learning their web development stack which included Drupal, Javascript, HTML5, CSS3, SCSS, PHP, and jQuery. I had never worked on a CMS before and had to jump in the deep end and learn quickly. I have since built multiple fully responsive websites, custom Drupal 7 & Drupal 8 modules using both PHP and Javascript. Our app team uses Meteor and React. On my own time have spent learning the App team's stack to be a more well developed and rounded developer.</p>
        <p>When I'm not working or spending my time hiking, backpacking, climbing, camping, etc, I spend it learning and trying to develop my skills. I have always enjoyed learning, but as I get older I enjoy learning more and more.</p>
        </div>
      </section>
      <Footer />
    </div>
    )
  }
}
