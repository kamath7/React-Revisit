import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fetchMovies = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Something is wrong");
      }
      const transforme = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
        };
      });
      setMovies(transforme);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
    // fetch("https://swapi.dev/api/films/")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     const transforme= data.results.map((movie)=> {
    //       return {
    //         id: movie.episode_id,
    //         title: movie.title,
    //         openingText: movie.opening_crawl
    //       }
    //     })
    //     setMovies(transforme);
    //   });
  }, []);
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {!loading && <MoviesList movies={movies} />}
        {!loading && movies.length === 0 && <p>No movies found 😮</p>}
        {loading && <p>Loading...</p>}
        {!loading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
