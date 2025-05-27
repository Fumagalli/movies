import { PageTemplate } from "../../components/PageTemplate";

import './styles.scss';

export function ProfilePage() {
  return (
    <PageTemplate>
      <section className="profile">
        <h2>Perfil</h2>
        <p>Nome: ...</p>
        <p>Email: ...</p>
      </section>
    </PageTemplate>
  );
}
