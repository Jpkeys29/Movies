import { useState } from 'react'
import NavBar from './NavBar.jsx';
import MainContent from './MainContent.jsx';
import { tempMovieData, tempWatchedData } from './MoviesArray';
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"
import MovieList from './MovieList.jsx';
import ListBox from './List.Box.jsx';
import WatchedBox from './WatchedBox.jsx';

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
    <NavBar>
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <SearchBar />
      <SearchResults movies={movies} />
    </NavBar>
    <MainContent>
      <ListBox>
        <MovieList movies={movies} />
      </ListBox>
    <WatchedBox />
    </MainContent>  
    </>
  );
}


export default App



