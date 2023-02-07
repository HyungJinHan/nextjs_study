import Seo from 'components/Seo';
import React, { useEffect, useState } from 'react';

const API_KEY = '7ae54da55160a1ac5fe8b2fa038d0013';

function Index(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      )).json();

      setMovies(results);
    })();
  }, [])

  return (
    <div>
      <Seo title='Home' />
      {!movies && <h4>Loading...</h4>}
      {movies?.map(
        (movie) => (
          <div key={movie.id}>
            <h4>{movie.original_title}</h4>
          </div>
        )
      )}
    </div >
  );
}

export default Index;