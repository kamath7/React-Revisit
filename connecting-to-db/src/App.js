import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  function fetchMovies() {
    fetch("https://swapi.dev/api/films/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const transforme= data.results.map((movie)=> {
          return {
            id: movie.episode_id,
            title: movie.title,
            openingText: movie.opening_crawl
          }
        })
        setMovies(transforme);
      });
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
