import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function NavLink(props) {
  const router = useRouter();
  console.log(router)

  return (
    <nav>
      <Link legacyBehavior href='/'>
        <a className={router.pathname === '/' ? 'active' : 'deactive'}>Home</a>
      </Link>
      &nbsp;&nbsp;&nbsp;

      <Link legacyBehavior href='/about'>
        <a className={router.pathname === '/about' ? 'active' : 'deactive'}>About</a>
      </Link>

      <style jsx>{`
        nav {
          background-color: whitesmoke;
          padding-top: 10px;
          padding-bottom: 10px;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: red;
          font-weight: bold;
        }
        .deactive {
          color: black;
        }
      `}</style>

      {/* 
      styled jsx는 해당 컴포넌트에서만 사용 가능
      다른 컴포넌트에서 사용 불가
      */}
    </nav >
  );
}

export default NavLink;