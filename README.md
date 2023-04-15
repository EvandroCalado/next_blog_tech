![Captura de tela de 2023-04-15 11-19-21](https://user-images.githubusercontent.com/110628201/232235477-88f36798-8396-433e-ba19-6b0d3997551c.png)


<h1 align="center"> 🖥️ Blog Tech </h1>
<h3 align="center"><a href="https://next-blog-tech.vercel.app/" target="_blank" > 🚀 Click aqui para acessar o projeto </a></h3>


<p align="center">
  <a href="#Introdução"> 🧩 Introdução </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Resultados"> 🚀 Resultados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Dependências"> 🧪 Dependências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Testes">💡 Testes </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Creditos"> 🏆 Créditos </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<br/>

<a id="Introdução"></a>
## 🧩 Introdução 

<br />

  ⭐ Olá!

Este projeto de blog foi construído utilizando tecnologias modernas e avançadas, como Next.js, TypeScript, Storybook, Styled Components, Jest, Husky, Prism, ESLint, Prettier e um backend feito no Strapi.

O Next.js foi utilizado para criar a estrutura do projeto, incluindo roteamento, renderização no servidor e geração estática de páginas. Isso significa que o blog é rápido e escalável, além de ser facilmente indexado por mecanismos de busca.

O TypeScript foi utilizado para adicionar tipagem estática ao JavaScript, o que torna o código mais seguro, fácil de entender e manter.

O Storybook foi utilizado para desenvolver e testar os componentes do blog. Isso permitiu criar componentes isolados, reutilizáveis e altamente testáveis.

O Styled Components foi utilizado para estilizar os componentes do blog de forma modular e fácil de manter. Isso permitiu criar estilos personalizados para cada componente, garantindo um design coeso e consistente.

O Jest foi utilizado para criar testes unitários, garantindo que cada componente e funcionalidade do blog funcionasse corretamente e livre de bugs.

O Husky foi utilizado para executar scripts automaticamente antes de cada commit, o que ajudou a manter a qualidade do código e evitar erros comuns.

O Prism foi utilizado para destacar a sintaxe do código, tornando-o mais fácil de ler e entender.

O ESLint foi utilizado para analisar o código e garantir que ele seguisse as melhores práticas e padrões de código.

O Prettier foi utilizado para formatar o código de forma consistente, garantindo que todos os desenvolvedores do projeto estivessem escrevendo código da mesma maneira.

O backend do projeto foi construído utilizando o Strapi, um CMS de código aberto que permite criar e gerenciar conteúdo. Isso significa que o blog pode ser facilmente atualizado e mantido por meio de uma interface intuitiva.

Em conjunto, essas tecnologias criaram um projeto de blog moderno, rápido, escalável, fácil de manter e de alta qualidade, com um backend robusto e seguro construído no Strapi.

Atenciosamente,

Evandro Calado - Desenvolvedor frotend.

<br/>

<a id="Resultados"></a>
## 🚀 Resultados 

<br/> 

## Front-end

</summary>

### 📱 Mobile 

⭐ Home | ⭐ Home Dark | ⭐ Post | ⭐ Menu |
|---|---|---|---|
![Tela 1](https://user-images.githubusercontent.com/110628201/232230794-bd9c472f-f7f3-451c-9897-32b611105df3.png) | ![Tela 2](https://user-images.githubusercontent.com/110628201/232230842-dd8dad9b-f5fb-4b44-a39e-080cac3c4f51.png) | ![Captura de tela de 2023-04-15 11-13-46](https://user-images.githubusercontent.com/110628201/232233875-759afc64-fb00-4a16-a722-868045ec391c.png) | ![Captura de tela de 2023-04-15 11-17-03](https://user-images.githubusercontent.com/110628201/232235434-ee386f40-0764-46a0-b02f-ac6100d47386.png)

  
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

### 💻 Desktop 
  
 ⭐ Home | ⭐ Home Dark | ⭐ Post |
|---|---|---|
![Captura de tela de 2023-04-15 11-19-21](https://user-images.githubusercontent.com/110628201/232250405-20ce512d-969d-42bd-af73-5f54196c137d.png) | ![Captura de tela de 2023-04-15 11-19-30](https://user-images.githubusercontent.com/110628201/232250470-9137916a-8e3e-41a7-b298-123db851e885.png) | ![Captura de tela de 2023-04-15 11-19-44](https://user-images.githubusercontent.com/110628201/232250481-e8aa0dc0-945a-45b9-b09d-e461a7b0f5bd.png)

<br/>

<a id="Dependências"></a>
## 🧪 Dependências

<br />   

## `📖 Scripts` 

```JSON
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next export",
    "storybook": "start-storybook -p 6006 -s ./public",
    "build-storybook": "build-storybook",
    "deploy-static": "npm run build && npm run export",
    "test": "jest",
    "lint": "eslint src --max-warnings=0",
    "lint-staged": "lint-staged",
    "prepare": "husky install"
  },

```

## `📖 Dependencies` 

```JSON
  "dependencies": {
    "@styled-icons/material-outlined": "^10.47.0",
    "disqus-react": "^1.1.5",
    "graphql": "^16.6.0",
    "graphql-request": "^5.2.0",
    "next": "13.2.4",
    "prismjs": "^1.29.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-router-dom": "^6.9.0",
    "styled-components": "^5.3.9"
  },

```

## `📖 devDependencies` 

```JSON
   "devDependencies": {
    "@babel/core": "^7.21.3",
    "@storybook/addon-actions": "^6.5.16",
    "@storybook/addon-essentials": "^6.5.16",
    "@storybook/addon-interactions": "^6.5.16",
    "@storybook/addon-links": "^6.5.16",
    "@storybook/builder-webpack5": "^6.5.16",
    "@storybook/manager-webpack5": "^6.5.16",
    "@storybook/react": "^6.5.16",
    "@storybook/testing-library": "^0.0.13",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^14.0.0",
    "@types/node": "^18.15.3",
    "@types/prismjs": "^1.26.0",
    "@types/react": "^18.0.28",
    "@types/styled-components": "^5.1.26",
    "@typescript-eslint/eslint-plugin": "^5.55.0",
    "@typescript-eslint/parser": "^5.55.0",
    "babel-loader": "^8.3.0",
    "babel-plugin-styled-components": "^2.0.7",
    "eslint": "^8.36.0",
    "eslint-config-next": "^13.2.4",
    "eslint-config-prettier": "^8.7.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-storybook": "^0.6.11",
    "husky": "^8.0.0",
    "jest": "^29.5.0",
    "jest-environment-jsdom": "^29.5.0",
    "jest-styled-components": "^7.1.1",
    "lint-staged": "^13.2.0",
    "prettier": "^2.8.4",
    "ts-jest": "^29.0.5",
    "typescript": "^5.0.2"
  },
  "lint-staged": {
    "src/**/*": [
      "npm run lint -- --fix",
      "npm test -- --findRelatedTests --passWithNoTests --bail"
    ]
  }

```
<br />

<a id="Testes"></a>
## 💡 Testes

<br />

🧷 Componentes

<br />

⭐ Jest |
|---|
|  ![Captura de tela de 2023-04-15 16-53-10](https://user-images.githubusercontent.com/110628201/232250629-5f9cd7e8-aa27-4919-82f3-9155c343f42e.png)


<br /> 

<a id="Creditos"></a>
## 🏆 Créditos

<br /> 

<div > 

| [<img src="https://user-images.githubusercontent.com/110628201/227955313-b9f72ab7-24b3-41a1-ab4e-3969a6a73d42.png" width=300><br><sub> Evandro Calado </sub>](https://www.linkedin.com/in/evandro-calado/) | ***Olá 😃 Se você chegou até aqui, acredito que gostou do meu projeto, nesse caso temos algo em comum, sendo assim que tal conversamos um pouco? Meu chama no linkedin 😁*** | 
|---|---|


</div> 
