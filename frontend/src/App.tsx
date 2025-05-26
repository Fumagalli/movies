import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import { MoviesPage } from "./pages/Movies";
import { MovieDetailPage } from "./pages/MovieDetail";
import { ProfilePage } from "./pages/Profile";
import { NotFoundPage } from "./pages/NotFound";
import { ProtectedRoute } from "./components/ProtectedRoute";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/movies"
          element={<ProtectedRoute>
            <MoviesPage />
          </ProtectedRoute>} />
        <Route
          path="/movies/:id"
          element={<ProtectedRoute>
            <MovieDetailPage />
          </ProtectedRoute>} />
        <Route
          path="/profile"
          element={<ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
