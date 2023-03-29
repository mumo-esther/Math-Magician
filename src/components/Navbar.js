import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = () => (
  <nav className="nav">
    <Link to="/" className="title">
      Math Magicians
    </Link>
    <ul>
      <CustomLink to="/Home">Home</CustomLink>
      <CustomLink to="/Calculator">Calculator</CustomLink>
      <CustomLink to="/Qoute">Qoute</CustomLink>
    </ul>
  </nav>
);

function CustomLink({ to, children, className = '' }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive === to ? 'active' : ''}>
      <Link to={to} className={className}>
        {children}
      </Link>
    </li>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CustomLink.defaultProps = {
  className: '',
};

export default Navbar;
