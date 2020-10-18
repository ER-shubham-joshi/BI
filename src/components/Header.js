import React from 'react';

export const Header = (props) => (
  <nav id="navigation">
    <h1 href="#" className="logo">
      Business Integrator
    </h1>
    {props.user && (
    <span className="username">
      {' '}
      { props.user }
    </span>
    )}
  </nav>
);
export default Header;
