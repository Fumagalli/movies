import { api } from "./api";

export async function registerUser(data: { name: string; email: string; password: string }) {
  const response = await api.post("/users/register", data);
  return response.data;
}

export async function loginUser(data: { email: string; password: string }) {
  const response = await api.post("/users/login", data);
  localStorage.setItem("token", response.data.token);
  return response.data;
}
