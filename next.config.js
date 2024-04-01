module.exports = {
  reactStrictMode: true,
  // 리다이렉트 시켜주지만, 순간적으로 url이 변경되는 것을 볼 수 있다.
  // async redirects() {
  //   return [
  //     {
  //       source: "/old-blog/:path*",
  //       destination: "/new-blog/:path*",
  //       permanent: false,
  //     },
  //   ];
  // },

  // url을 변경하여 보여준다. url을 숨길 수 있다. (API KEY 등을 숨겨야 하는 경우에 사용된다.)
  async rewrites() {
    return [
      {
        source: "/api/movies/popular",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      {
        source: "/api/movies/top-rated",
        destination: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      {
        source: "/api/movies/now-playing",
        destination: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      {
        source: "/api/movies/upcoming",
        destination: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      {
        source: `/api/movie/info/:id`,
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    ];
  },
};
