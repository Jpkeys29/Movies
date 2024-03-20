import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"

export default function NavBar ({movies}) {

    return (
        <nav className="nav-bar">
            <div className="logo">
                <span role="img">🍿</span>
                <h1>usePopcorn</h1>
            </div>
        <SearchBar />
        <SearchResults movies={movies} />
        
        </nav>
    )
}