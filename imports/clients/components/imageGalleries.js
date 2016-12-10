import React, { Component } from 'react';
import { Link } from 'react-router';

import {PhotoSwipeGallery} from 'react-photoswipe';
import Gallery from './Gallery';

export default class ImageGalleries extends Component {

  componentDidMount() {
    console.log("TEST");
    function Flickr(){
      this.init();
    }
    Flickr.prototype = {
      init: function() {
        this.key = "1a56d279a88a12572362be86e002b99b",
          this.Secret = "15a8ecb093fa0fd7",
            this.getJSON();
      },
      getJSON: function(){
        const Key = "1a56d279a88a12572362be86e002b99b"
        const photoSetKey = "c9deaa7c24dc04a72c26b486333db809"
        const Secret = "15a8ecb093fa0fd7"
        // const src = `https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=${Key}&user_id=149595845@N07&format=json&per_page=20&nojsoncallback=1`;i
        const src = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${photoSetKey}&photoset_id=72157673604746003&user_id=149595845%40N07&format=json&nojsoncallback=1&auth_token=72157677413636586-9036f2397496d8a7&api_sig=128de85ee199da264ff9fc1bf30e69af`
        console.log(src);
        return $.getJSON(src)
        .then(function(data){
          var imgSrc;
          console.log(data.photoset.photo);
          //        for( photo in data.photos.photo){
          for( photo in data.photoset.photo){
            console.log(data.photoset.photo[photo]);
            imgSrc = data.photoset.photo[photo];
            var img = 'https://farm' + imgSrc.farm + '.staticflickr.com/' + imgSrc.server + '/' + imgSrc.id + '_' + imgSrc.secret + '_b.jpg';
            $('#flickr').append(`<img src=${img} />`)


            //imgSrc = data.photos.photo[photo];
            //var img = 'https://farm' + imgSrc.farm + '.staticflickr.com/' + imgSrc.server +
            //'/' + imgSrc.id + '_' + imgSrc.secret + '_b.jpg';
            //$('#flickr').append(`<img src=${img} />`)
          }
        })
      },

    }
    document.addEventListener( "DOMContentLoaded", function() {
      var flickrFeed = new Flickr();

    });
  }
  render() {
    return (
      <section className='#flickr' id='flickr'>
      HELLO
      <Gallery />
      </section>
    )
  }
}
