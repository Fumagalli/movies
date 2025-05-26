import "./styles.scss";

export function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Cubos Movies</span>
    </footer>
  );
}
