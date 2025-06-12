import React from "react";
import { useParams, Link } from "react-router-dom";

const movieData = {
  1: { name: "Dangal", description: "Biographical sports drama.", image:"https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg" },
  2: { name: "3 Idiots", description: "College life and innovation story.", image: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg" },
  3: { name: "Inception", description: "A thief who steals corporate secrets through dream-sharing technology.", image: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg" },
  4: { name: "Interstellar", description: "Journey through space to save humanity.", image: "https://image.tmdb.org/t/p/w300/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  5: { name: "Avengers: Endgame", description: "Superheroes fight to undo the snap.", image:  "https://image.tmdb.org/t/p/w300/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
  6: { name: "Titanic", description: "A love story on the doomed ship.", image: "https://image.tmdb.org/t/p/w300/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" },
  7: { name: "The Dark Knight", description: "Batman vs. Joker in a gritty Gotham.", image: "https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  8: { name: "The Matrix", description: "A hacker discovers reality is an illusion.", image:  "https://image.tmdb.org/t/p/w300/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" }
};

export default function MovieDetails() {
  const { id } = useParams();
  const movie = movieData[id] || { name: "Movie Not Found", description: "No description available.", image: "" };

  return (
    <div className="details-page">
      <h2>{movie.name}</h2>
      <img src={movie.image} alt={movie.name} className="details-image" />
      <p>{movie.description}</p>
      <Link to={`/book/${id}`}>
        <button className="book-button">Book Seat</button>
      </Link>
    </div>
  );
}
