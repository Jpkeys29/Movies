import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"

export default function NavBar () {

    return (
        <nav className="nav-bar">
            <div className="logo">
                <span role="img">🍿</span>
                <h1>usePopcorn</h1>
            </div>
        <SearchBar />
        <SearchResults />
        
        </nav>
    )
}