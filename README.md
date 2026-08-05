# 💳 Desenvolvendo o Dio Bank

Projeto desenvolvido durante o curso de **React + TypeScript**, com o objetivo de criar uma aplicação bancária simples aplicando conceitos de autenticação, gerenciamento de estado global e persistência de dados.

## 🚀 Sobre o projeto

O Dio Bank é uma aplicação que simula um sistema bancário com autenticação de usuário.

Durante o desenvolvimento foram aplicados conceitos como:

- TypeScript
- React Hooks
- Context API
- LocalStorage
- Rotas protegidas
- Validação de login
- Componentização
- Testes unitários

## ✨ Funcionalidades

### 🔐 Sistema de Login

- Login utilizando email e senha
- Validação das credenciais informadas pelo usuário
- Armazenamento dos dados do usuário no LocalStorage
- Usuário permanece autenticado após atualizar a página

### 🌎 Context API

Foi criado um contexto global para gerenciamento da autenticação:

- Controle do estado de login
- Compartilhamento das informações do usuário entre componentes
- Persistência da sessão através do LocalStorage

### 👤 Página de informações do usuário

Página protegida onde são exibidos:

- Nome do usuário
- Email cadastrado

A página só pode ser acessada caso o usuário esteja autenticado.

Caso não exista uma sessão ativa, o usuário é direcionado novamente para a tela de login.

## 🔑 Dados para teste

Utilize as credenciais abaixo para acessar a aplicação:

**Email**
```
catz@dio.bank
```

**Senha**
```
123456
```

## 🛠 Tecnologias utilizadas

- React
- TypeScript
- React Router DOM
- Context API
- LocalStorage
- Jest / Testing Library
- CSS

## 📦 Como executar o projeto

### 1 - Clone o repositório

```bash
git clone https://github.com/Catyz/dio-bank.git
```

### 2 - Instale as dependências

```bash
npm install
```

### 3 - Execute o projeto

```bash
npm start
```

A aplicação estará disponível em:

```
http://localhost:3000
```

## 🌐 Deploy

Projeto publicado utilizando **Netlify**.

Link:

```
https://diobank-catarina.netlify.app/
```

## 🧪 Testes

Foram desenvolvidos testes unitários para validar as funções implementadas e garantir o funcionamento correto da autenticação.

## 👩‍💻 Desenvolvido por

**Catarina Dalsan**

GitHub:
https://github.com/Catyz