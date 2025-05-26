import { Link } from "react-router-dom";
import { CubosDesk } from "../Icons/CubosDesk";
import { CubosMobile } from "../Icons/CubosMobile";

import "./styles.scss";
import { Sun } from "../Icons/Sun";
import { Button } from "../Button";

export function Header() {
  const token = localStorage.getItem("token");
  const isDesktop = true;

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
          <Button className="primary" onClick={() => console.log('a1')}>
            <Sun />
          </Button>

          {token && (
            <>
              <Link to="/movies">Filmes</Link>
              <Link to="/profile">Perfil</Link>
              <Link to="/login" onClick={() => localStorage.removeItem("token")}>Logout</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
