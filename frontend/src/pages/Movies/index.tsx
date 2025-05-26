import { useEffect, useState } from "react";
import { getMovies } from "../../services/movieService";
import { MovieList } from "../../components/MovieList";
import { Loader } from "../../components/Loader";
import { ErrorMessage } from "../../components/ErrorMessage";
import { PageTemplate } from "../../components/PageTemplate";
import type { Movie } from "../../types/Movie";
import { Button } from "../../components/Button";
import PosterImg from "../../assets/Poster.png";

import './styles.scss';

export function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const movie = {
    id: 1,
    title: "titulo do filme",
    description: "descrição do filme",
    posterUrl: PosterImg,
    releaseDate: "data de lançamento",
    duration: 120,
  };

  useEffect(() => {
    getMovies()
      .then(data => setMovies(Array.isArray(data.data) ? data.data : []))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
      .then(() => {
        setMovies([movie, movie, movie, movie, movie, movie, movie, movie, movie, movie, movie, movie, movie, movie, movie]);
      })
  }, []);


  return (
    <PageTemplate>
      <div className="filter" style={{ padding: "24px" }}>
        <p>Pesquise por filmes</p>
        <p>Filtros</p>
        <Button>
          Adicionar Filme
        </Button>
      </div>

      <section className="movies">
        {loading && <Loader />}

        {error && <ErrorMessage message={error} />}

        {!loading && !error && <MovieList movies={movies} />}
      </section>

      <div className="pagination" style={{ padding: "24px" }}>
      </div>

    </PageTemplate>
  );
}
