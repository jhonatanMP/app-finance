# app-finance
![image](https://user-images.githubusercontent.com/50504050/228393842-d5ebe930-d3ae-4fc8-a18a-f1d91a2b98e2.png)

# App Finance Colaborativo


## Executando o projeto

Abaixo seguem as instruções para você executar o projeto na sua máquina.

Comece clonando o repositório e instalando suas dependências:

```sh
git clone https://github.com/alebbueno/app-finance
```

### Back-end

O back-end desse projeto é construído em Node.js, mais especificamente sua versão LTS.

> Você pode instalar o Node.js seguindo [esse guia](https://efficient-sloth-d85.notion.site/Instalando-o-Node-js-d40fdabe8f0a491eb33b85da93d90a2f).

Além do Node.js, utilizamos o banco de dados PostgreSQL e **recomendamos** o uso do Docker para executar o banco em sua máquina.

> Você pode instalar o Docker seguindo [esse guia](https://efficient-sloth-d85.notion.site/Instalando-o-Docker-6290d9994b0b4555a153576a1d97bee2).

Nesse projeto, usamos o serviço de autenticação [Clerk](https://clerk.com/), e você precisará configurá-lo para rodar o projeto em sua máquina.

> Você pode configurar o Clerk seguindo [esse guia](./docs/getting-started-with-clerk.md).

Após instalar o Node.js e o Docker, vamos acessar a pasta do projeto back-end, subir o serviço do banco de dados, configurar nossas variáveis ambiente e, então, subir o servidor HTTP.

```sh
cd apps/server

# Copiar o arquivo com os dados de conexão e demais variáveis ambiente
cp .env.example .env

# Subir o serviço do PostgreSQL via docker (caso não tenha instalado o PostgreSQL em seu computador)
docker-compose up -d

# Rodar as migrations do prisma
npx prisma migrate dev

# Subir o servidor HTTP
npm run start:dev
```

### Mobile

Para executar o app mobile.

> Você pode instalar o Expo e os emuladores seguindo [esse guia](https://react-native.rocketseat.dev/).

Após configurar o ambiente mobile, você pode abrir o emulador e executar o projeto de acordo com a plataforma que estiver utilizando:

```sh
# Caso esteja usando Android
npm run android

# Caso esteja usando iOS
npm run ios

# Caso esteja usando um dispositivo físico
npm start
```

## Links rápidos ↗
- [Layout | Figma 🎨](https://www.figma.com/file/vpgkQS4aLme0KziBxatTPE/Projeto-App-Financas?node-id=201-433&t=OGwa8KfBSq6psdQw-0)

## Tech Stack 💜

**📱 Mobile:**

- [Expo](https://github.com/expo/expo)
- [TypeScript](https://github.com/microsoft/TypeScript)

**🏧 Server:**

- [NestJS](https://github.com/nestjs/nest) `(REST)` ???
- [Prisma](https://github.com/prisma/prisma)
- [PostgreSQL](https://github.com/postgres) [`Neon Database`](http://neon.tech/)
- [TypeScript](https://github.com/microsoft/TypeScript)

## Funcionalidades 🚀

### Funcionalidades 1.0 (MVP):

- [ ] **Cadastro Usuario**
      

- [ ] **Controle básico financeiro (saldo/entrada/saida)**
      

- [ ] **Convite para controle financeiro**
      

## Contribuições 🆘

`#JuntosParaOPróximoNível 🚀`

## Roadmap

- **MVP** `v1.0.0` 📅 Meta: 27/04/2023 - Start Projeto

- Só o tempo dirá... 👀

## Contribuidores 😊


## Licença 📃

[MIT]()
