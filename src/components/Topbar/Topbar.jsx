import React from 'react';

import { Link } from 'react-router-dom';

// import { ReactComponent as LogoSvg } from '../../assets/img/instagram-logo.svg';

import './Topbar.scss';

const Topbar = () => (
  <header className="topbar">
    <div className="container">
      <Link to='/'>Feed</Link>
      <Link to='/users'>Users</Link>
      <Link to='/users/1'>Profile</Link>
      <Link to='/newuser'>New User</Link>
    </div>
  </header>
);

export default Topbar;
