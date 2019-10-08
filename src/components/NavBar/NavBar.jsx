import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Marquee3k from 'marquee3000';



const NavBar = (props) => {
 let marquee = props.desc

 console.log(marquee)

  let nav = props.user ?

    <div className='NavBar-link-user'>

      <Link to='' onClick={props.handleLogout} className='NavBar-link' id='user'>Log Out</Link>


    </div>
    :
    <div className='NavBar-link-user'>
      <Link to='/login' className='NavBar-link' id='user'>Log In</Link>


      <Link to='/signup' className='NavBar-link' id='user'>Sign Up</Link>
    </div>;

{Marquee3k.init()}


  return (
    <>
    <div className='NavBar'>
      {/* <Link to='/category=business' className='NavBar-link'>US</Link>
      <Link to='/category=business' className='NavBar-link'>World</Link>
      <Link to='/category=business' className='NavBar-link'>Business</Link>
      <Link to='/category=business' className='NavBar-link'>Entertainment</Link>
      <Link to='/category=business' className='NavBar-link'>Tech</Link> */}
      {nav}
    </div>

            
    <div className="marquee3k" 
        data-speed="0.55"
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