import React from "react";
import { Link } from "react-router-dom";

const movies = [
  { id: 1, name: "Dangal", image: "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg" },
  { id: 2, name: "3 Idiots", image: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg" },
  { id: 3, name: "Inception", image: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg" },
  { id: 4, name: "Interstellar", image: "https://image.tmdb.org/t/p/w300/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { id: 5, name: "Avengers: Endgame", image: "https://image.tmdb.org/t/p/w300/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
  { id: 6, name: "Titanic", image: "https://image.tmdb.org/t/p/w300/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" },
  { id: 7, name: "The Dark Knight", image: "https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { id: 8, name: "The Matrix", image: "https://image.tmdb.org/t/p/w300/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" }
];

export default function MovieList() {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
          <img src={movie.image} alt={movie.name} className="movie-image" />
          <h3>{movie.name}</h3>
        </Link>
      ))}
    </div>
  );
}