import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "../../services/movieService";
import { Loader } from "../../components/Loader";
import { ErrorMessage } from "../../components/ErrorMessage";
import { PageTemplate } from "../../components/PageTemplate";
import type { Movie } from "../../types/Movie";

export function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    getMovieById(id)
      .then(data => setMovie(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <PageTemplate>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {movie && (
        <div className="movie-detail">
          <img src={movie.posterUrl} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <p>Duração: {movie.duration} min</p>
          <p>Lançamento: {movie.releaseDate}</p>
        </div>
      )}
    </PageTemplate>
  );
}
