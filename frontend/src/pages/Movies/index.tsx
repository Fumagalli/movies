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
import { MovieCard } from "../../components/MovieCard";

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

  const movie = {
    id: 1,
    title: "titulo do filme",
    description: "descrição do filme",
    posterUrl: PosterImg,
    releaseDate: "data de lançamento",
    duration: 120,
  };

  const teste = [];
  teste.push(movie)
  teste.push(movie)
  teste.push(movie)
  teste.push(movie)
  teste.push(movie)

  teste.push(movie)
  teste.push(movie)
  teste.push(movie)
  teste.push(movie)
  teste.push(movie)

  return (
    <PageTemplate>
      <div className="filter" style={{ padding: "24px" }}>
        <p>Pesquise por filmes</p>
        <p>Filtros</p>
        <Button className="primary">
          Adicionar Filme
        </Button>
      </div>

      <section className="movies">
        {/* <h2>Filmes</h2>
        <hr />
        <MovieCard movie={movie} />
        <hr />
        <Loader /> */}
        {/* <hr /> */}
        {loading && <Loader />}
        {/* <hr /> */}
        {error && <ErrorMessage message={error} />}
        {/* <hr /> */}
        {!loading && !error && <MovieList movies={teste} />}
      </section>

      <div className="pagination" style={{ padding: "24px" }}>
      </div>

    </PageTemplate>
  );
}
