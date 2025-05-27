import { api } from "./api";

export async function registerUser(data: {
  name: string;
  email: string;
  password: string;
}): Promise<void> {
  const response = await api.post("/users/register", data);
  const { token } = response.data;
  localStorage.setItem("token", token);
  return;
}

export async function loginUser(data: {
  email: string;
  password: string;
}): Promise<void> {
  const response = await api.post("/users/login", data);
  const { token } = response.data;
  localStorage.setItem("token", token);
}
