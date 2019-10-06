import React from 'react';
import { Link } from 'react-router-dom';






const NavBar = () => {

  return (

    <>
    <div>

      <Link to='' className='NavBar-link'>LOG OUT</Link>

    </div>

    <div>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
    </div>


    <div>

      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>

    </>
  );
};

export default NavBar;