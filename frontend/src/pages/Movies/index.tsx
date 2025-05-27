import { useEffect, useState } from "react";
import { getMovies } from "../../services/movieService";
import { MovieList } from "../../components/MovieList";
import { Loader } from "../../components/Loader";
import { ErrorMessage } from "../../components/ErrorMessage";
import { PageTemplate } from "../../components/PageTemplate";
import { Filter } from "../../components/Filter";
import { Button } from "../../components/Button";
import PosterImg from "../../assets/Poster.png";

import type { Movie } from "../../types/Movie";

import './styles.scss';

export function MoviesPage() {
  const [name, setName] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = () => {
    // Chame a busca de filmes aqui
  };

  const handleOpenFilters = () => {
    // Abrir modal de filtros futuramente
  };

  const handleAddMovie = () => {
    // Abrir modal de adicionar filme futuramente
  };

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
      <Filter
        value={name}
        onChange={setName}
        onSearch={handleSearch}
        onOpenFilters={handleOpenFilters}
        onAddMovie={handleAddMovie}
      />

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
