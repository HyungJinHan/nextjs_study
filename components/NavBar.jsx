import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function NavBar(props) {
  const router = useRouter();
  console.log(router)

  return (
    <nav>
      <Link
        style={{ textDecoration: `none` }}
        className='home'
        href='/'
      >
        Home
      </Link>

      &nbsp;&nbsp;

      <Link
        style={{ textDecoration: `none` }}
        className='about'
        href='/about'>
        About
      </Link>
    </nav >
  );
}

export default NavBar;