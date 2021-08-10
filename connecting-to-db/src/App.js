import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchMovies() {
    setLoading(true);
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    const transforme = data.results.map((movie) => {
      return {
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
      };
    });
    setMovies(transforme);
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
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
