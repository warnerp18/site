import React, { Component } from 'react';

export default class Front extends Component {

  scrollToNextSection(){
    console.log('click');
    $('html, body').animate({
        scrollTop: $(".aboutme").offset().top
    }, 2000);
    e.preventDefault();
  }

  render(){
    return (
      <div>
        <section className='header-image'>
          <div className='text-container'>
            <h1>I am Phil</h1>
            <h2>I like to code & learn</h2>
            <a href='#' onClick={this.scrollToNextSection}>read more</a>
          </div>
        </section>
        <section className='aboutme'>
          <p className='contain580 push60'>
            <span>My</span>
            <b> name is Phil Warner</b>.
            I started programming two years ago. I attended the Iron Yard's Front End Engineering course in Houston, TX in Setpember 2014.
            While attending The Iron Yard I learned the basics of HTML5, CSS3, and Javascript. I currently work at <a href='https://www.poeticsystems.com' target='_blank'>Poetic Systems</a> where I use Drupal 7/8 and PHP. Outside of work I have been teaching myself Meteor and React
          </p>
        <div className='seperator push60'></div>
          <p className='contain580'>Like most developers that come out of a programming bootcamp, my path into the programing world started somewhere completely different.</p>
        <p className='contain580'>I grew up a military brat. I was born in a small German town and have since then been traveling the world. I graduated high school in 2005 and went to college at The Citadel in Charleston, SC. In the middle of my Sophomore year I left for my first of two deployments to Afghanistan. After my second deployment I returned to The Citadel and graduated in 2010.</p>
        <p className='contain580'>My life plan for as long as I can remember has been to graduate college and take my commision as an officer in the Army, and follow my dad's footsteps into Special Forces. Due to some complications in my tours to Afghanistan and spending a few months at Walter Reed Army Medical Center I was not allowed back in the military.</p>
          <p className='contain580'>I spent the next four years traveling to over 35 countries and working overseas. Until I came across an article talking about the demand for developers. This article pointed me to codecademy.com. My love for coding started at codecademny and desire to learn more hasn't faded a bit.</p>
        </section>
      </div>
    )
  }
}
