import { MovieCard } from "../MovieCard";
import type { Movie } from "../../types/Movie";
import "./styles.scss";

export function MovieList({ movies }: { movies: Movie[] }) {
  if (!movies.length) return <div>Nenhum filme encontrado.</div>;
  return (
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
