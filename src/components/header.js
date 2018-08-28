import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const HeaderLink = ({ children, ...props }) => (
  <NavLink  
        exact
        activeClassName="bg-white" 
        className="p1 mx2 black text-decoration-none round" 
        {...props}
  >
        {children}
  </NavLink>
);

const Header = () => (
  <header className="flex items-center justify-between px4">
    <h1 className="h1">
      <span className="logo">🍽</span>
      My Receipt
    </h1>
    <nav>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/favorites">Favotires</HeaderLink>
      <HeaderLink to="/contact">Contact</HeaderLink>
    </nav>
  </header>
);

HeaderLink.propTypes = {
  children: PropTypes.node,
}

export default Header;
