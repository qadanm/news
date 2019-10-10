import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Marquee3k from 'marquee3000';



const NavBar = (props) => {
 const marquee = props.desc



  let nav = props.user ?

    <div className='NavBar-link-user'>

      <Link to='' onClick={props.handleLogout} className='NavBar-link' id='user'>Log Out</Link>
      <Link to='' onClick='' className='NavBar-link' id='user'>Favorites</Link>

    </div>
    :
    <div className='NavBar-link-user'>
      <Link to='/login' className='NavBar-link' id='user'>Log In</Link>


      <Link to='/signup' className='NavBar-link' id='user'>Sign Up</Link>
    </div>;



  return (
    <>
    <div className='NavBar'>
      {/* <Link to='/category=business' className='NavBar-link'>US</Link>
      <Link to='/category=business' className='NavBar-link'>World</Link>
      <Link to='/category=business' className='NavBar-link'>Business</Link>
      <Link to='/category=business' className='NavBar-link'>Entertainment</Link>
      <Link to='/category=business' className='NavBar-link'>Tech</Link> */}
      <div className="Logo"><i className="fas fa-kiwi-bird"></i></div>
      <div className="nav">
      {nav}
      </div>
    </div>
    {Marquee3k.init()}
      
    <div className="marquee3k" 
        data-speed="0.3"
        data-pausable="bool">

        <p>{marquee}</p>

    </div>

{/* 
      
      {
          
            props.news.map((news, idx) => 
              console.log(news.description)
            )

      }

      {

        console.log(
          
          props.news.map((news, idx) => 
            {
              return(
                news.description
              )
            }
          ).join(',')
        )
      }

       */}
    </>

  );
};
 

export default NavBar;