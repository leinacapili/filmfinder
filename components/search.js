"use client";
// import { TextField } from "@mui/material";
import { useState } from "react";

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!query.trim()) {
            return;
        }
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(query)}`, {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDkzNDA4NTg0ODExNjJhMTgwZmU0MzY1ZGIxNjg3MyIsInN1YiI6IjY2MWYzZGZiZDc1YmQ2MDE3YzMyNWZiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RjgyHqNHKtJmMQtcS9Y5YeVImHkwGriJvnB10a5EYPo"
                }
            });
            const data = await response.json();
            setSearchResults(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: "numeric" };
        return date.toLocaleDateString("en-US", options);
    };

    return (
        <div className="px-52 font-mono">
            <form className="px-5 pt-10 flex flex-row" onSubmit={handleSubmit}>
                <input className="bg-white text-stone-900 border rounded-md border-stone-900 px-2 w-full"
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Find a film..."
                />
                <button 
                    className="px-3 text-stone-900 rounded-md hover:bg-stone-900 hover:text-white" 
                    type="submit">
                        Search
                </button>
            </form>
            <ul className="flex flex-col px-5 pt-3">
                {searchResults.map((movie) => (
                    <li className="flex flex-row text-stone-900 py-3" key={movie.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                            className="w-36 h-auto rounded-md mb-2"
                        />
                        <div>
                            <h3 className="text-md font-semibold pl-3">{movie.title} ({formatDate(movie.release_date)})</h3>
                            <p className="text-sm pl-3">{movie.overview}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
