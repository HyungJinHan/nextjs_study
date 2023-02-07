import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './NavBar.module.css';

function NavBar(props) {
  const router = useRouter();
  console.log(router)

  return (
    <nav>
      <Link
        className={`
          ${styles.link}
          ${router.pathname === '/' ? styles.active : styles.deactive}
        `}
        href='/'
      >
        Home
      </Link>
      {/* 두 개 이상의 클래스 지정 방법 1 (변수 처리) */}
      &nbsp;&nbsp;&nbsp;
      <Link
        className={[
          styles.link,
          router.pathname === '/about' ? styles.active : styles.deactive
        ].join(' ')}
        href='/about'>
        About
      </Link>
      {/* 두 개 이상의 클래스 지정 방법 2 (배열 처리) */}
    </nav >
    /* 
    css module 사용 시, classname 지정법
    이러한 형식으로 사용하는 이유 : classname을 무작위로 만들기 때문에 충돌의 위험이 없음
    ex) NavBar_nav__OBiyO
    */
  );
}

export default NavBar;