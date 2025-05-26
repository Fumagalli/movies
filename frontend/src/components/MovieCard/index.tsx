import { Link } from "react-router-dom";
import type { Movie } from "../../types/Movie";
import "./styles.scss";

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <img src={movie.posterUrl} alt={movie.title} />
        <h3>{movie.title}</h3>
      </Link>
      <p>{movie.releaseDate}</p>
    </div>
  );
}
