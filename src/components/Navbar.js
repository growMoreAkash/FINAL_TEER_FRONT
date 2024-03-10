
import React, { useState } from 'react';
import { Button } from './Button';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src="logo.png" alt="" className='logo' />
        </Link>

        <div style={{ display: 'flex' }}>
          <img src='logo.png' style={{color:'white'}} className='mini_logo'/>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        </div>


        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink to='/' exact activeClassName="active" className='nav-links' onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/common' exact activeClassName="active"
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Common Number
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/dream' exact activeClassName="active"
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Dream Number
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/previous' exact activeClassName="active"
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Previous Result
            </NavLink>
          </li>
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;



