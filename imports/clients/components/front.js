import React, { Component } from 'react';

import Menu from './menu';
import Footer from './footer';


export default class Front extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }

  }

  componentDidMount(){
    const ELEM = [...document.querySelector('.text-container').childNodes];
    setTimeout( () => {
      ELEM.map(items =>{
        className= items.className;
        console.log(items);
        debugger;
        items.className = `${className} open`;
      })
    }, 800)
  }
  scrollToNextSection(){
    $('html, body').animate({
        scrollTop: $(".aboutme").offset().top
    }, 1500);
    e.preventDefault();
  }

  didHover() {
    this.setState({
      hover: true,
    });
  }

  leaveHover() {
    this.setState({
      hover: false,
    });
  }

  flipImage(){
    this.setState({
      hover: !this.state.hover,
    });
  }

  slideInEffect() {
    console.log(this);
  }

  render(){
    const flipped = this.state.hover ? 'flipped' : '';
    return (
    <div>
      <Menu />
      <section className='header-image'>
        <div className='text-container' onLoad={() => this.slideInEffect()}>
          <div className='name'>
            <h1>I'm Phil</h1><br />
          </div>
          <div className='header-about'>
            <h2>I love to code & backpack</h2>
            <a href='#' onClick={this.scrollToNextSection}>read more</a>
          </div>
        </div>
      </section>
      <section className='contain580 push60 aboutme'>
      <div className='push60'>
        <div className='profPicContainer'>
          <div id='card' className={ flipped } onClick={ () => this.flipImage() }onMouseOver={ () => this.didHover() } onMouseOut={ () => this.leaveHover() }>
            <img src="images/prof.jpg" className='profPic workPic front' />
            <img src='images/afghan1.jpg'className='profPic afghanPic back' />
          </div>
        </div>
        <p>
          <span>My</span>
          <b> name is Phil Warner. </b>
          I started programming two years ago. I attended the Iron Yard's Front End Engineering course in Houston, TX, in September 2014. While attending The Iron Yard I learned the basics of HTML5, CSS3, Javascript, Backbone JS, Github, and APIs. I’m proficient in Drupal 7 and at building modules to support Drupal 8. Outside of work I have been teaching myself Meteor and React using resources such as <a href='https://www.egghead.io' target='_blank'>egghead.io</a>, <a href='https://leveluptutorials.com' target='_blank'>leveluptutorials.com</a>, <a href='https://themeteorchef.com' target='_blank'>themeteorchef.com</a>, <a href='https://meteor.com' target='_blank'>meteor.com</a>, & <a href='https://facebook.github.io/react' target='_blank'>facebook.github.io/react</a>.</p>
      </div>
        <div className='seperator push60'></div>
        <div>
          <p>Like most developers that come out of a programming boot camp, my path into the programming world started somewhere completely different.</p>
          <p>I am the son of a U.S. Army Green Beret, and as a child I spent a lot of time outdoors, camping and hiking with my father. Growing up in the military I developed an affinity for travel and adventure, so I joined the Army at 17. After graduating high school, I finished boot camp and went to The Citadel, The Military College of South Carolina. During my sophomore year at The Citadel in Charleston, SC, I left for my first of two deployments to Afghanistan. After my second deployment I returned to The Citadel and graduated in 2010.</p>
          <p>I spent the next four years traveling to over 35 countries and working overseas. Two of my most memorable travel moments during that time included hikes. In 2013, I spent two weeks hiking to Everest Base Camp which was one of the best experiences of my life. After getting back to Kathmandu, I then spent another week traveling around Nepal. Then in 2014, I climbed Kilimanjaro which was the toughest climb I’ve ever accomplished. The night summit was incredibly challenging, but so rewarding when I finally made it to the top and was able to watch the sunrise.</p>
<p>During my time abroad, I came across an article explaining the demand for developers and their impact on the future. This article pointed me to codecademy.com. My love for coding started at Codecademy and my desire to learn more has only grown. I began my coding career at The Iron Yard where we learned the basics of HTML, CSS, and SCSS. We then moved on to Javascript and after 12 weeks I had made multiple single page applications using APIs from Four Square, Firebase, & Stripe.</p>
<p>After graduating from The Iron Yard I was hired by Poetic Systems and began learning their web development stack which included Drupal, Javascript, HTML5, CSS3, SCSS, PHP, and jQuery. I had never worked on a CMS before and had to jump in the deep end and learn quickly. I have since built multiple fully responsive websites, custom Drupal 7 & Drupal 8 modules using both PHP and Javascript. Our app team uses Meteor and React, and on my own time I have started learning the App team's stack in order to be a more well-rounded developer. When I'm not working or spending my time hiking, backpacking, climbing, or camping, I enjoy learning and trying to develop my skills.</p>
        </div>
      </section>
      <Footer />
    </div>
    )
  }
}
