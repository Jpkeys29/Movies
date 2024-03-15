import { useState } from "react";
import { tempMovieData, tempWatchedData } from './MoviesArray';
import MovieList from "./MovieList";


export default function ListBox () {
    const [isOpen1, setIsOpen1] = useState(true);


    return (
        <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen1((open) => !open)}>
            {isOpen1 ? "–" : "+"}
          </button>
          {isOpen1 && (
            <MovieList />
          )}
        </div>
    )
}