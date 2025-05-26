import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/userService";
import { ErrorMessage } from "../../components/ErrorMessage";
import { PageTemplate } from "../../components/PageTemplate";
import "./styles.scss";
import { Button } from "../../components/Button";

export function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await registerUser({ name, email, password });
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
      <section className="register">
        <div className="register-bg">
          <div className="register-card">
            <form className="register-form" onSubmit={handleSubmit}>
              {error && <ErrorMessage message={error} />}

              <div className="input-group">
                <label>
                  Nome
                  <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </label>
              </div>

              <div className="input-group">
                <label>
                  E-mail
                  <input
                    type="email"
                    placeholder="Digite seu e-mail"
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
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                </label>
              </div>

              <div className="input-group">
                <label>
                  Confirmação de senha
                  <input
                    type="password"
                    placeholder="Digite sua senha novamente"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                  />
                </label>
              </div>

              <div className="register__submit">
                {/* <Link to="/movies">Esqueci minha senha</Link> */}

                <Button type="submit" className="primary">Entrar</Button>
              </div>


            </form>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
