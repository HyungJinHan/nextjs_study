/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/old-blog/:path*',
        // 해당 URL을 입력할 경우
        destination: '/new-blog/:path*',
        // 해당 URL로 자동 리다이렉트 해줌
        permanent: false
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        // 해당 URL을 입력할 경우
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        // 해당 URL로 자동 리다이렉트 해줌 (URL 변경 X)
      },
      {
        source: '/api/movies/:id',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      },
      {
        source: '/api/movies/reviews/:id',
        destination: `https://api.themoviedb.org/3/movie/:id/reviews?api_key=${API_KEY}`
      }
    ];
  }
}

module.exports = nextConfig
