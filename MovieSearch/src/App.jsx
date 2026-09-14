import { useState } from 'react'
import './App.css'
import InputBox from './InputBox'
import MovieCard from './MovieCard';

function App() {
  const [movieData, setMovieData] = useState({
    title: "Inception",
    year: "2010",
    imdb: "8.8",
    actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
    director: "Christopher Nolan",
    released: "16 Jul 2010",
    image : "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  });

  return (
    <>
      <InputBox  setMovieData = {setMovieData} />
      <MovieCard movieData = {movieData} /> 
    </>
  )
}

export default App
