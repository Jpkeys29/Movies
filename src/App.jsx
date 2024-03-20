import { useState } from 'react'
import NavBar from './NavBar.jsx';
import MainContent from './MainContent.jsx';
import { tempMovieData, tempWatchedData } from './MoviesArray';


const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
    <NavBar />
    <MainContent movies={movies} />  
    </>
  );
}


export default App



