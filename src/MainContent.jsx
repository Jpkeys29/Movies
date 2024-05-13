import { useState } from "react";
import { tempMovieData, tempWatchedData } from './MoviesArray';
import ListBox from "./Box";
import WatchedBox from "./WatchedBox";

export default function MainContent ({children}) {
    return (
        <main className="main">
            {children}
        </main>
    )
}