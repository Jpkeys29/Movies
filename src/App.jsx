import { useState } from 'react'
import NavBar from './NavBar.jsx';
import MainContent from './MainContent.jsx';
import { tempMovieData, tempWatchedData } from './MoviesArray';
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"
import MovieList from './MovieList.jsx';
import Box from './Box.jsx';
import WatchedSummary from './WatchedBox.jsx';
import WatchedMovieList from './WatchedMovieList.jsx'

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);


  return (
    <>
      <NavBar>
        <Logo />
        <SearchBar />
        <SearchResults movies={movies} />
      </NavBar>

      <MainContent >
        <Box>
          <MovieList movies={movies} />
        </Box>

        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </MainContent>
    </>
  );
}

function Logo() {
  return <div className='logo'>
    <span role="img">🍿</span>
    <h1>usePopcorn</h1>
  </div>
}

export default App



