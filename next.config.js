/** @type {import('next').NextConfig} */

const API_KEY = '7ae54da55160a1ac5fe8b2fa038d0013';

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
      }
    ]
  }
}

module.exports = nextConfig
