import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Marquee3k from 'marquee3000';



const NavBar = (props) => {
 const marquee = props.desc




  let nav = props.user ?

    <div className='NavBar-link-user'>

      <Link to='' onClick={props.handleLogout} className='NavBar-link' id='user'>Log Out</Link>
      {/* <Link to='' onClick='' className='NavBar-link' id='user'>Favorites</Link> */}

    </div>
    :
    <div className='NavBar-link-user'>
      <Link to='/login' className='NavBar-link' id='user'>Log In</Link>


      <Link to='/signup' className='NavBar-link' id='user'>Sign Up</Link>
    </div>;



  return (
    <>
    <div className='NavBar'>
      <Link to='/'><div className="Logo"><i className="fas fa-kiwi-bird"></i></div></Link>
      <div className="KiwiNewsContainer">
        <div className="KiwiNewsText">
          <p>kiwi<span className='Dot'>.</span></p>
        </div>
      </div>
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
    </>

  );
};
 

export default NavBar;