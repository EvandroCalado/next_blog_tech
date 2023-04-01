import { BaseProps } from '.';

export default {
  settings: {
    blogName: 'Evandro Calado',
    blogDescription: 'Blog sobre alguma coisa',
    footer:
      '<p>Feito com 💕 por <a href="https://github.com/EvandroCalado">Evandro Calado</a></p>',
    logo: 'https://res.cloudinary.com/dnhsdenji/image/upload/v1679924887/110628201_ae0753864b.jpg',

    menuLink: [
      {
        id: '1',
        link: '/home',
        text: 'home',
        newTab: false,
      },
      {
        id: '2',
        link: '/posts',
        text: 'posts',
        newTab: false,
      },
    ],
  },
  children: 'Olá Mundo',
} as BaseProps;
