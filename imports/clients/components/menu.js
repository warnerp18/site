import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Menu extends Component {
  render (){
    return (
      <section className='menu'>
      <span>
        <Link to='https://www.linkedin.com/in/philip-warner-1a868744' target='_blank' className='icon linkedin'></Link>
      </span>
       <span>
        <Link to='https://www.github.com/warnerp18' target='_blank' className='icon github'></Link>
       </span>
       <span>
         <Link to="/pics" className='menuLink'>Pics</Link>
       </span>
       <span>
         <Link to="/work" className='menuLink'>Work</Link>
       </span>
       <span>
         <Link to="#" className='menuLink'>Home</Link>
       </span>
       <span>
       <Link to='#' className='homeIcon'></Link>
       </span>
      </section>
    )
  }
}
