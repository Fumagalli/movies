import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/userService";
import { ErrorMessage } from "../../components/ErrorMessage";
import { PageTemplate } from "../../components/PageTemplate";
import "./styles.scss";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

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

            <Input
              fieldName="E-mail"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <Input
              fieldName="Senha"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <div className="login__submit">
              <Link to="/movies">Esqueci minha senha</Link>

              <Button type="submit" className="primary">Entrar</Button>
            </div>
          </form>
        </div>
      </div>
    </PageTemplate>
  );
}