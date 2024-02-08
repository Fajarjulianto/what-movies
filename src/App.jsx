import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com/?apikey=bed9f4f6';
const SEARCH_SVG = './search.svg';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      searchMovies(searchTerm);
    } else {
      setMovies([]);
    }
  }, [searchTerm]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-800">
      <div className="text-white mt-20">
        <h1 className="text-5xl font-sans">WhatMovies</h1>
      </div>
      
      <div className="flex justify-center items-center mt-5 relative">
        <div className="relative">
          <input
            type="search"
            placeholder="Search for movie.."
            value={searchTerm}
            className="border-none text-slate-300 w-56 md:w-96 border-gray-300 bg-slate-700 rounded-xl px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SEARCH_SVG}
            alt="Search"
            className="absolute right-0 top-0 bottom-0 px-3 py-2 cursor-pointer"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 mb-5 mx-5">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
}
