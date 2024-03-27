import { useState } from "react";
import { tempMovieData, tempWatchedData } from './MoviesArray';
import ListBox from "./Box";
import WatchedBox from "./WatchedBox";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);


export default function MainContent ({children}) {
    return (
        <main className="main">
            {children}
        </main>
    )
}