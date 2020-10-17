<h1 align="center">
  <a href="#">
    <img src="https://assets.pointec.dev/image/rocketseat-nlw3-happy-banner.png" alt="Happy banner" />
  </a>
</h1>

# Next Level Week 3 - Happy

Projeto desenvolvido para a NLW3.

Leve felicidade para o mundo, visite casas de acolhimento institucional e mude o dia de muitas crianças.

O Happy é uma aplicação que conecta pessoas à casas de acolhimento institucional para fazer o dia de muitas crianças mais feliz.

# Tabela de conteúdo

- [Feature](#Features)
- [Aplicação web](#Aplicação-web)
- [Tecnologia](#Tecnologia)
- [Arquitetura](#Arquitetura)
- [Dependências](#Dependências)
- [Dependências de desenvolvimento](#Dependências-de-desenvolvimento)
- [Clonando o projeto](#Clonando-o-projeto)
- [Iniciando a aplicação](#Iniciando-a-aplicação)
- [Autor](#Autor)

# Features

- Página inicial com a lista dos orfanatos
- Página com os detalhes do orfanato
- Página de cadastro de um novo orfanato

# Aplicação web

Inicialmente o projeto possui uma lista de orfanatos, detalhes e cadastro de orfanatos.

- [Projeto Backend](https://github.com/paesrafael/nlw3-happy-backend)
- [Projeto Mobile](https://github.com/paesrafael/nlw3-happy-mobile)

<p align="center">
  <a href="#" target="_blank">
    <img src="https://assets.pointec.dev/image/rocketseat-nlw3-happy.png" alt="Tela do projeto" />
  </a>
  <h4 align="center">Imagem por Rocketseat</h4>
</p>

# Tecnologia

O projeto foi desenvolvido com o ReactJS e Typescript.

# Arquitetura

```bash
web
├── public/
│   ├── index.html
├── src/
│   ├── assets/
│   │   └── images
│   │       └── landing.svg
│   │       └── logo.svg
│   │       └── map-marker.svg
│   │   └── styles
│   │       └── GlobalStyles.ts
│   ├── components/
│   │   └── Location/
│   │       └── index.tsx
│   │       └── styles.ts
│   │   └── Sidebar/
│   │       └── index.tsx
│   │       └── styles.ts
│   ├── pages/
│   │   └── CreateOrphanage/
│   │       └── index.tsx
│   │       └── styles.ts
│   │   └── Landing/
│   │       └── index.tsx
│   │       └── styles.ts
│   │   └── Orphanages/
│   │       └── index.tsx
│   │       └── styles.ts
│   │   └── OrphanagesMap/
│   │       └── index.tsx
│   │       └── styles.ts
│   ├── services/
│   │   └── api.ts
│   ├── utils/
│   │   └── mapIcon.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   └── routes.tsx
├── .editorconfig
├── .env
├── .eslintrc.json
├── .gitignore
├── .prettierrc.js
├── babel.config.js
├── config-overrides.js
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.paths.json
└── yarn.lock
```

# Dependências

- [React](https://reactjs.org)
- [Typescript](https://www.typescriptlang.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [Leaflet](https://leafletjs.com/)
  - [React-leaflet](https://react-leaflet.js.org/)
- [React-icons](https://react-icons.github.io/react-icons/)
- [React-router-dom](https://www.npmjs.com/package/react-router-dom)
- [Styled Components](https://github.com/styled-components/styled-components)
  - [@types/styled-components](https://www.npmjs.com/package/@types/styled-components)

# Dependências de desenvolvimento

- [@types/react-leaflet](https://www.npmjs.com/package/@types/react-leaflet)
- [@types/react-router-dom](https://www.npmjs.com/package/@types/react-router-dom)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
- [Babel Eslint](https://github.com/babel/babel-eslint)
  - [Babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import)
  - [Babel-plugin-transform-remove-console](https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console)
- [ESLint](https://eslint.org/)
  - [Eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
  - [Eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import)
  - [Eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
  - [Eslint-plugin-import-helpers](https://github.com/Tibfib/eslint-plugin-import-helpers)
  - [Eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
  - [Eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
  - [Eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [Customize-cra](https://www.npmjs.com/package/customize-cra)
- [React-app-rewired](https://www.npmjs.com/package/react-app-rewired)

# Clonando o projeto

Baixe o projeto diretamente do GitHub ou use o terminal:

```bash
# Clone o repositório
$ git clone git@github.com:paesrafael/nlw3-happy-web.git

# Ou use a CLI do GitHub
$ gh repo clone paesrafael/nlw3-happy-web

# Acesse a pasta do projeto
$ cd nlw3-happy-web

# Instale as dependências
# Na raiz do projeto, use NPM ou YARN para instalar

# Usando YARN
$ yarn install

# Usando NPM
$ npm install
```

# Iniciando a aplicação

Para começar use o comando:

```bash
# Usando YARN
yarn start

# Usando NPM
npm start

# Acesse a aplicação em http://localhost:3000
```

# Autor

NLW3 - Happy desenvolvido por [Rafael Paes](https://github.com/paesrafael/)
