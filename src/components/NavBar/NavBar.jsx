import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Marquee3k from 'marquee3000';



const NavBar = (props) => {
 const marquee = props.desc

 function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

  let nav = props.user ?

    <div className='NavBar-link-user'>

      <Link to='' onClick={props.handleLogout} className='NavBar-link' id='user'>Log Out</Link>

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
    <div className="locale">
      <div className="weather">
          <div className="temp">
            {props.temp}&deg;
          </div>
          <div className="icon">
            <img
                src={props.icon}
                alt='...'
              />
          </div>
        </div>
          <div className="time">
            {formatAMPM(new Date())}
          </div>
      </div>
    </>

  );
};
 

export default NavBar;