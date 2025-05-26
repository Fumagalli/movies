import { useEffect, useState } from "react";
import { getMovies } from "../../services/movieService";
import { MovieList } from "../../components/MovieList";
import { Loader } from "../../components/Loader";
import { ErrorMessage } from "../../components/ErrorMessage";
import { PageTemplate } from "../../components/PageTemplate";
import type { Movie } from "../../types/Movie";

export function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getMovies()
      .then(data => setMovies(Array.isArray(data.data) ? data.data : []))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <PageTemplate>
      <h2>Filmes</h2>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && <MovieList movies={movies} />}
    </PageTemplate>
  );
}
