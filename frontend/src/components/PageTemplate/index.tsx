import { Header } from "../Header";
import { Footer } from "../Footer";

import "./styles.scss";

export function PageTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <main className="page-content">
        {children}
      </main>

      <Footer />
    </>
  );
}
