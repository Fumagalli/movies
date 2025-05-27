import { Link } from "react-router-dom";
import type { Movie } from "../../types/Movie";
import "./styles.scss";

export function MovieCard({ movie }: { movie: Movie }) {
  return (

    <div className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <div className="movie-card__image-wrapper">
          <img
            className="movie-card__image"
            src={movie.posterUrl}
            alt={movie.title}
          />

          <div className="movie-card__overlay">
            <div className="movie-card__info">
              <h3 className="movie-card__title">{movie.title}</h3>
              <p className="movie-card__tags">{movie.description}</p>
              {/* <div className="movie-card__meta">
                <span>{movie.releaseDate}</span>
                <span>{movie.duration} min</span>
              </div> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
