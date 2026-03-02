# Biluca Agenda da Breja (Angular)

### Tecnologias utilizadas

- nodejs
- [Tailwind](https://v3.tailwindcss.com/docs/guides/create-react-app)

### Serviços externos

Documentação da API open-source utilizada:

- [Open Brewery DB](https://openbrewerydb.org/documentation)

### Plugins VSCode

Plugins recomendados para usar no Visual Studio Code:

- ESLint
- Prettier

# Criação do ambiente de desenvolvimento

A fim de padronizar o ambiente de desenvolvimento e evitar problemas de compatibilidade será utiliza a imagem `ubuntu:24.04`.

Utilizando Toolbox:

```shell
toolbox create --distro ubuntu --release 24.04 react-dev-ubuntu
```

Para a configuração do ambiente é necessário executar os seguintes comandos:

```shell
./setup.sh           // instala as principais dependências do projeto
```

Instalação do VSCode no ambiente de desenvolvimento:

[Install VS Code on Linux](https://code.visualstudio.com/docs/setup/linux#_install-vs-code-on-linux)

```
sudo apt install ./<file>.deb
```

# Estrutura do projeto

O projeto utiliza uma estrutura que visa demonstrar semanticamente (a partir dos próprios arquivos) as funcionalidades e conceitos aplicados.

Dessa forma, cada pasta e arquivo representa algum tipo de conceito dentro do universo da aplicação.

```
📦src
 ┣ 📂 app                   // Implementação das principais funcionalidades da aplicação
 ┣ 📂 assets                // Recursos estáticos da aplicação
 ┣ 📂 auth                  // Implementação da autenticação do usuário
 ┣ 📂 common                // Implementação de soluções genéricas utilizadas em qualquer local da aplicação
 ┣  ┣ 📂 ui                 // Componentes genéricos da aplicação
 ┣  ┣ 📂 lib                // Algoritmos e soluções genéricas
 ┣ 📂 core                  // Definição das principais estruturas da aplicação
 ┣ 📂 integrations          // Implementação das integrações com serviços externas necessárias para o projeto
 ┣ 📂 testing               // Implementação de testes, mocks e modo standalone
 ┗ 📜 app.js
```

- _app_
  - Implementação das principais funcionalidades da aplicação
  - Pode depender apenas de _common_, _core_ e _auth_
- _assets_
  - Recursos estáticos da aplicação
- _auth_
  - Implementação da autenticação do usuário
  - Pode depender apenas de _common_ e _core_
- _common_
  - Implementação de soluções genéricas utilizadas em qualquer local da aplicação
  - Não depende de nenhum outro pacote
  - _ui_
    - Componentes genéricos da aplicação
  - _lib_
    - Algoritmos e soluções genéricas
- _core_
  - Definição das principais estruturas da aplicação
  - Não depende de nenhum outro pacote a não ser _common_
- _integrations_
  - Implementação das integrações com serviços externas necessárias para o projeto
  - Depende de _core_
- _testing_
  - Implementação de testes, mocks e modo standalone
  - Depende do _core_


# Development notes


This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
