import React from 'react';
import NavLink from './NavLink';

function Layout({ children }) {
  return (
    <div>
      <NavLink />
      <div>{children}</div>
    </div>
  );
}

export default Layout;