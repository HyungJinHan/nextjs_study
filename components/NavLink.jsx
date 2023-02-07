import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import vercel from '../public/vercel.svg'

function NavLink(props) {
  const router = useRouter();

  return (
    <nav>
      <Image width={100} src={vercel} alt='none' />

      <div>
        <Link legacyBehavior href='/'>
          <a className={router.pathname === '/' ? 'active' : 'deactive'}>Home</a>
        </Link>

        <Link legacyBehavior href='/about'>
          <a className={router.pathname === '/about' ? 'active' : 'deactive'}>About</a>
        </Link>
      </div>

      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>

      {/* 
        styled jsx는 해당 컴포넌트에서만 사용 가능
        다른 컴포넌트에서 사용 불가
        global 사용으로 전역적인 스타일링 적용 가능
      */}
    </nav >
  );
}

export default NavLink;