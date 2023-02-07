import Seo from 'components/Seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function Home({ results }) {
  const router = useRouter();

  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
    // 넘겨받은 movie.id를 id로 받아와 라우터 기능으로 URL에 push하기
    // 마지막에 URL을 원하는 형식으로 마스킹 작업
  };

  return (
    <div className="container">
      <Seo title='Home' />
      {results?.map(
        (movie) => (
          <div className='movie' key={movie.id} onClick={() => { onClick(movie.id, movie.original_title) }}>
            {/* movie.id를 클릭하면서 파라미터로 넘겨주기 */}
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='none' />
            <h4>
              <Link
                href={`/movies/${movie.original_title}/${movie.id}`}
                legacyBehavior
              >
                <a>{movie.original_title}</a>
              </Link>
            </h4>
          </div>
        )
      )}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.3s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

// 서버 사이드에서 데이터를 요청해서 HTML에 저장하는 식으로 작동하여 로딩을 없애주는 작업
export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  // config 리다이렉트 설정을 통한 API_KEY 숨기기

  return {
    props: {
      results
    }
  }
}