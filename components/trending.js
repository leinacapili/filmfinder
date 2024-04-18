"use client";
import { useState, useEffect } from "react";

const Trending = () => {
    const [trends, setTrends] = useState([]);
    const [sortBy, setSortBy] = useState("title.asc");

    const sortedTrends = [...trends].sort((a, b) => {
        if (sortBy === "title.asc") { // Sorting the movies by title in ascending order, i.e., in what order they would appear in the dictionary
            if (a.title < b.title) return -1;
            else if (a.title > b.title) return 1;
            else return 0;
        } else if (sortBy === "popularity.desc") { // Sorting the movies by descending popularity, or having the most popular movies appear first
            if (a.popularity > b.popularity) return -1;
            else if (a.title < b.popularity) return 1;
            else return 0;
        } else if (sortBy === "release_date.desc") { // Sorting the movies by descending release date, or having the latest released movie appear first
            if (a.release_date > b.release_date) return -1;
            else if (a.release_date < b.release_date) return 1;
            else return 0;
        }
    })

    async function fetchTrending() {
        try {
            const response = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc", {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDkzNDA4NTg0ODExNjJhMTgwZmU0MzY1ZGIxNjg3MyIsInN1YiI6IjY2MWYzZGZiZDc1YmQ2MDE3YzMyNWZiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RjgyHqNHKtJmMQtcS9Y5YeVImHkwGriJvnB10a5EYPo"
                }
            });
            const data = await response.json();
            setTrends(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTrending();
    }, [sortBy]);

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: "long", day: "numeric", year: "numeric" };
        return date.toLocaleDateString("en-US", options);
    };

    return (
        <div className="flex flex-col pt-10 px-52">
            <div className="flex flex-row w-full py-3 justify-between px-5">
                <h1 className="font-mono text-black text-xl font-bold">TRENDING</h1>
                <div className="flex flex-row">
                    <label htmlFor="sortSelect" className="text-black font-mono font-semibold pr-3">Sort by:</label>
                    <select id="sortSelect" value={sortBy} onChange={handleSortChange} className="font-mono bg-white text-black border border-black rounded-md px-1">
                        <option value="title.asc">Title</option> 
                        <option value="popularity.desc">Most popular</option>
                        <option value="release_date.desc">Latest release</option>
                    </select>
                </div>
            </div>
            <hr className="mx-5 mb-2"/>
            <div className="carousel carousel-center w-full px-5 overflow-x-auto"> 
                {sortedTrends.map(trend => (
                    <div key={trend.id} className="carousel-item flex flex-col w-36 h-auto py-5 px-2">
                        <img
                            src={`https://image.tmdb.org/t/p/w200${trend.poster_path}`}
                            alt={trend.title}
                            className="w-36 h-auto rounded-md mb-2"
                        />
                        <h2 className="font-mono font-semibold text-black">{trend.title}</h2>
                        <p className="font-mono text-black text-sm">{formatDate(trend.release_date)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trending;
