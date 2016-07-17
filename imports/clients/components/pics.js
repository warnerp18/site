import React, { Component } from 'react';

import Menu from './menu';
import Footer from './footer';
import ImageGalleries from './imageGalleries';

export default class Pics extends Component {
  render() {
    return (
      <div className='pic-page'>
      <Menu />
        <section className='contain580 pics-about push60'>
          <h1>Photography</h1>
          <p>I have always loved having pictures from my trips and experiences, but never really appreaciated photopgraphy and a good camera until I was in South Africa. I have since upgraded my camera twice and have been trying to develop my skills as a photographer since.</p>
        </section>
        <ImageGalleries />
        <Footer />
      </div>
    )
  }
}
