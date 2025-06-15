# School Manager API

API de gerenciamento escolar desenvolvida com Node.js, Express e Sequelize.

## 🚀 Tecnologias

- Node.js
- Express
- Sequelize (PostgreSQL)
- JWT para autenticação
- Docker
- bcryptjs para criptografia

## 📦 Instalação

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```
3. Configure as variáveis de ambiente em um arquivo `.env`
4. Inicie o container Docker:
```bash
docker-compose up -d
```
5. Execute as migrations:
```bash
npx sequelize db:migrate
```
6. Inicie o servidor:
```bash
npm run dev
```

## 🛣️ Rotas da API

Todas as rotas são prefixadas com `/api`

### Autenticação
- **POST** `/api/auth/token`
  - Gera um token JWT
  - **Body**:
    ```json
    {
      "email": "seu@email.com",
      "password": "sua_senha"
    }
    ```
  - **Resposta**: Token JWT

### Usuários
- **POST** `/api/users`
  - Cria um novo usuário
  - **Body**:
    ```json
    {
      "username": "seu_username",
      "email": "seu@email.com",
      "password": "sua_senha"
    }
    ```

- **GET** `/api/users`
  - Login do usuário
  - **Body**:
    ```json
    {
      "email": "seu@email.com",
      "password": "sua_senha"
    }
    ```

- **PUT** `/api/users`
  - Atualiza dados do usuário
  - Requer autenticação (JWT Token)
  - **Body**:
    ```json
    {
      "username": "novo_username",
      "email": "novo@email.com",
      "password": "nova_senha"
    }
    ```

- **DELETE** `/api/users`
  - Remove um usuário
  - Requer autenticação (JWT Token)

### Estudantes
- **GET** `/api/students`
  - Lista todos os estudantes
  - Requer autenticação (JWT Token)

- **POST** `/api/students`
  - Cria um novo estudante
  - Requer autenticação (JWT Token)
  - **Body**: Dados do estudante

- **GET** `/api/students/:id`
  - Busca um estudante específico
  - Requer autenticação (JWT Token)

- **PUT** `/api/students/:id`
  - Atualiza dados do estudante
  - Requer autenticação (JWT Token)
  - **Body**: Dados do estudante

- **DELETE** `/api/students/:id`
  - Remove um estudante
  - Requer autenticação (JWT Token)

## 🔒 Autenticação

Para rotas protegidas, inclua o token JWT no header da requisição:
```
Authorization: Bearer seu_token_jwt
```

## 🛠️ Variáveis de Ambiente

Crie um arquivo `.env` com as seguintes variáveis:

```env
SECRET=seu_jwt_secret
EXPIRE_TIME=1h
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=school_manager
```
