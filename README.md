# movies

## Objetivo

Criar um aplicativo web fullstack responsivo para cadastro, edição, visualização e exclusão de filmes, com funcionalidades de login, busca e filtros.

## Frontend

- Tecnologia esperada: React (ou outra stack, com justificativa)
- Interface deve ser responsiva, inclusive para larguras intermediárias
- Implementação do modo claro e escuro, com botão de alternância

### Páginas

1. Login:
    - e-mail e senha, com redirecionamento se já logado
2. Cadastro:
    - nome
    - e-mail
    - senha e confirmação
    - Redirecionamento se já logado
3. Listagem de Filmes:
    - Exibe lista com ou sem busca
    - Campo de busca por texto
    - Paginação obrigatória (10 filmes por página)
    - Acesso permitido apenas para usuárias autenticados
    - Botão de filtros com modal contendo:
        - ○ Filtros obrigatórios: duração e intervalo de datas
        - ○ Mais um filtro adicional a sua escolha
4. Adição/Edição de filme:
    - se o filme tiver data futura de lançamento, enviar e-mail automático no dia da estreia
5. Detalhes do filme:
    - exibir título
    - título original
    - descrição
    - orçamento
    - data de lançamento
    - entre outros

## Backend

1. TypeScript obrigatório
2. Banco de dados:
    - PostgreSQL, com uso de migrations
3. ORM:
    - livre escolha
4. Armazenamento de imagens (escolher um):
    - AWS S3
    - Cloudflare R2
    - Google Cloud Storage
5. Envio de e-mails (escolher um):
    - Mailhog
    - Ethereal
    - Resend

## Tecnologias utilizadas

- TypeScript
- Express
- React com Vite
- Postgress
- TypeORM
- JWT
- multer
- Ethereal com nodemailer e node-cron
- Swagger: Para documentar a API.
- Jest: Para testes unitários e de integração.

## Endpoints

### Usuários

- POST /users/register: Cadastro de usuários.
- POST /users/login: Login e geração de token JWT.

### Filmes

- GET /movies: Listagem de filmes com busca, filtros e paginação.
- POST /movies: Adicionar um novo filme.
- PUT /movies/:id: Editar um filme existente.
- GET /movies/:id: Detalhes de um filme.
- DELETE /movies/:id: Excluir um filme.

### Filtros

- GET /filters: Listar filtros disponíveis.

## Iniciar o projeto

- Renomear o arquivo `.env-template`, para `.env` e ajustar as variaveis para os dados do BD

- Na raiz do projeto, rodar o comando

```js
docker-compose up --build -d
```
