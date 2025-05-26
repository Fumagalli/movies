import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/userService";
import { ErrorMessage } from "../../components/ErrorMessage";
import { PageTemplate } from "../../components/PageTemplate";
import "./styles.scss";
import { Button } from "../../components/Button";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await loginUser({ email, password });
      navigate("/movies");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro ao fazer login");
      }
    }
  };

  return (
    <PageTemplate>
      <div className="login-bg">
        <div className="login-card">
          <form className="login-form" onSubmit={handleSubmit}>
            {error && <ErrorMessage message={error} />}

            <div className="input-group">
              <label>
                Nome/E-mail
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </label>
            </div>

            <div className="input-group">
              <label>
                Senha
                <input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </label>
            </div>

            <div className="login__submit">
              <Link to="/movies">Esqueci minha senha</Link>

              <Button type="submit" className="primary">Entrar</Button>
            </div>


          </form>

          <p className="login-link">
            Não tem conta? <Link to="/register">Cadastre-se</Link>
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
