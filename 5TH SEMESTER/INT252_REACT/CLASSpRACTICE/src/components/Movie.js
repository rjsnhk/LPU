import React from 'react'
import Theater from './Theater'
import MovieList from './MovieList';
function Movie() {
  const movie1="heyy boy";
  const movie2="heyy girl";
  return (
    <div>
      <h1>Movie</h1>
<h2>{movie1}</h2>
    <Theater m1={movie1} m2={movie2} m3={'hiii buddy'} />
    <MovieList m1={'ddsafasda'} />
    </div>
  )
}

export default Movie
