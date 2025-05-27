import { api } from "./api";
import type { Movie, MovieCreateDTO, MovieListResponse } from "../types/Movie";

export async function createMovie(data: MovieCreateDTO) {
  const token = localStorage.getItem("token");
  const response = await api.post<Movie>("/movies", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function getMovies(params?: Movie): Promise<MovieListResponse> {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Usuário não autenticado");
  }

  try {
    const response = await api.get<MovieListResponse>("/movies", {
      params,
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response", response);
    return response.data;
  } catch (err: any) {
    console.log("err", err);
    if (err.response && err.response.data && err.response.data.message) {
      throw new Error(err.response.data.message);
    }
    throw err;
  }
}

export async function getMovieById(id: string): Promise<Movie> {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Usuário não autenticado");
  }
  try {
    const response = await api.get<Movie>(`/movies/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err: unknown) {
    if (
      typeof err === "object" &&
      err !== null &&
      "response" in err &&
      typeof (err as { response?: any }).response === "object" &&
      (err as { response: { data?: any } }).response.data &&
      typeof (err as { response: { data: any } }).response.data.message ===
        "string"
    ) {
      throw new Error(
        (
          err as { response: { data: { message: string } } }
        ).response.data.message
      );
    }
    throw err;
  }
}
