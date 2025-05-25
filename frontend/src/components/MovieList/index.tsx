import { useEffect, useState } from "react";
import { getMovies } from "../../services/movieService";
import type { Movie } from "../../types/Movie";

export function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getMovies()
      .then(data => setMovies(Array.isArray(data.data) ? data.data : []))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}
