import { useState } from "react";
import { tempMovieData, tempWatchedData } from './MoviesArray';
import ListBox from "./List.Box";
import WatchedBox from "./WatchedBox";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);


export default function MainContent () {
    return (
        <main className="main">
            <ListBox />
            <WatchedBox />
        </main>
    )
}