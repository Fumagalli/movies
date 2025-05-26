import { PageTemplate } from "../../components/PageTemplate";

export function ProfilePage() {
  // Aqui você pode buscar os dados do usuário autenticado
  return (
    <PageTemplate>
      <h2>Perfil</h2>
      <p>Nome: ...</p>
      <p>Email: ...</p>
      {/* Adicione mais campos conforme necessário */}
    </PageTemplate>
  );
}
