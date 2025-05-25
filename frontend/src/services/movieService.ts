import { api } from "./api";

export async function createMovie(data: any) {
  const token = localStorage.getItem("token");
  const response = await api.post("/movies", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function getMovies(params?: any) {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Usuário não autenticado");
  }

  try {
    const response = await api.get("/movies", {
      params,
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response", response);
    return response.data;
  } catch (err: any) {
    console.log("err", err);
    // Se o backend retornar 401, repasse a mensagem do backend
    if (err.response && err.response.data && err.response.data.message) {
      throw new Error(err.response.data.message);
    }
    throw err;
  }
}
