import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/userService";
import { ErrorMessage } from "../../components/ErrorMessage";
import { PageTemplate } from "../../components/PageTemplate";
import "./styles.scss";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

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

              <Input
                fieldName="Nome"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />

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

              <Input
                fieldName="Confirmação de senha"
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />

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
