import { Link } from "react-router-dom";
import { CubosDesk } from "../Icons/CubosDesk";
import { CubosMobile } from "../Icons/CubosMobile";
import { Sun } from "../Icons/Sun";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

export function Header() {
  const token = localStorage.getItem("token");
  const isDesktop = true;
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="wrapper">
        <Link to="/movies" className="header__logo">
          {isDesktop ? (
            <CubosDesk />
          ) : (
            <CubosMobile />
          )}
          Movies
        </Link>

        <nav>
          {/* <Button onClick={() => console.log('a1')}>
            <Sun fill="#fff" />
          </Button> */}

          {!token && (
            <Button onClick={() => navigate("/register")}>
              Registrar
            </Button>
          )}

          {token && (
            <>
              {/* <Link to="/movies">Filmes</Link> */}
              {/* <Link to="/profile">Perfil</Link> */}
              <Button onClick={() => localStorage.removeItem("token")}>
                Logout
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
