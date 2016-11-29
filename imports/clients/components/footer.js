import React, { Component } from 'react';

export default class Footer extends Component {
  render(){
    return (
      <footer>
        <section className='footer-container'>
          <div className='footer-left float-left'>
            <h2>About</h2>
            <p>I am Phil, an infantry veteran turned developer who recently moved to San Francisco, CA. If you are hiring I'd love to speak to you about an open position.</p>
          </div>
          <div className='footer-right float-left last'>
            <h2>Contact</h2>
            <p>If you would like to get in touch with me you can reach me at <a href='mailto:warnerp18@gmail.com'>warnerp18@gmail.com</a></p>
          </div>
        </section>
      </footer>
    )
  }
}
