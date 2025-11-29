# API de Clínicas Médicas

> Uma API RESTful simples e funcional para gerenciar informações de Clínicas, Médicos e Pacientes. Este projeto é o meu campo de treino no ecossistema Node.js, focado em Express e MongoDB!

---

## ✨ Tecnologias & Ferramentas Essenciais

O projeto foi construído utilizando o seguinte stack:

| Categoria | Pacote/Tecnologia | Versão | Descrição |
| :--- | :--- | :--- | :--- |
| **Backend** | **Node.js** | N/A | Ambiente de execução JavaScript. |
| **Framework** | **Express** | ^5.1.0 | Estrutura minimalista e flexível para a API. |
| **Banco de Dados** | **MongoDB** | N/A | Banco de dados NoSQL. |
| **ORM** | **Mongoose** | ^9.0.0 | Modelagem e validação de dados para o MongoDB. |
| **Ambiente** | **dotenv** | ^17.2.3 | Carrega variáveis de ambiente (como a string de conexão) de um arquivo `.env`. |
| **Desenvolvimento**| **Nodemon** | ^3.1.11 | Monitora e reinicia automaticamente o servidor durante o desenvolvimento. |

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
* **Node.js** (Versão recomendada: 18 ou superior)
* **MongoDB** (Local ou acesso a um cluster Atlas)
* **Git**

### ⚙️ Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories](https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories)
    ```

2.  **Acesse o diretório:**
    ```bash
    cd [pasta-do-seu-projeto]
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure o Banco de Dados:**
    * Crie um arquivo chamado **`.env`** na raiz do projeto.
    * Adicione sua string de conexão e a porta (o pacote `dotenv` cuidará de carregá-las):
        ```env
        MONGO_URI="[SUA STRING DE CONEXÃO DO MONGODB AQUI]"
        PORT=3000 
        ```

### 🏃 Executando a API

Para iniciar o servidor usando o Nodemon (modo de desenvolvimento):

```bash
npm run dev
```
Endpoints Disponíveis

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| POST | /api/clinicas | Cria uma nova clínica. |
| GET | /api/clinicas | Lista todas as clínicas. |
| GET | /api/clinicas/:id | Busca uma clínica específica pelo ID. |
| GET | /api/clinicas/:id/medicos | Lista todos os médicos vinculados a uma clínica. |
| GET | /api/clinicas/especialidades/:especialidade | Filtra clínicas por especialidade. |
| PUT | /api/clinicas/:id | Atualiza os dados de uma clínica. |
| DELETE | /api/clinicas/:id | Deleta uma clínica. |


