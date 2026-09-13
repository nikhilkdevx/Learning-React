import { useState } from 'react'
import './App.css'
import InputBox from './InputBox'
import MovieCard from './MovieCard';

function App() {
  const [movieData, setMovieData] = useState({
    title: "",
    year: "",
    imdb: "",
    actors: "",
    director: "",
    released: "",
    image : "",
  });

  return (
    <>
      <InputBox  setMovieData = {setMovieData} />
      <MovieCard movieData = {movieData} /> 
    </>
  )
}

export default App
