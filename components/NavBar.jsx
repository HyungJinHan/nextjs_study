import Link from 'next/link';
import React from 'react';

function NavBar(props) {
  return (
    <nav>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
    </nav>
  );
}

export default NavBar;