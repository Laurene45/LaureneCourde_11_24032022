// eslint-disable-next-line
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <div className="Header">
      <img src={Logo} alt="logo kasa" />
      <div className="Navigation">
        <NavLink to="/">
          <h3>Accueil</h3>
        </NavLink>
        <NavLink to="/a-propos">
          <h3>A propos</h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
