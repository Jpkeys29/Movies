import { useState } from "react";
import { tempMovieData, tempWatchedData } from './MoviesArray';


export default function MovieList () {
    const [movies, setMovies] = useState(tempMovieData);

    return (
        <ul className="list">
              {movies?.map((movie) => (
                <li key={movie.imdbID}>
                  <img src={movie.Poster} alt={`${movie.Title} poster`} />
                  <h3>{movie.Title}</h3>
                  <div>
                    <p>
                      <span>🗓</span>
                      <span>{movie.Year}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
    )

}