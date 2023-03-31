import { data } from '../../api/dados.json';

const { title, excerpt, content, cover, author, categories, createdAt } =
  data.posts.data[0].attributes;

const { id } = data.posts.data[0];

export default {
  id,
  title,
  excerpt,
  createdAt,
  content,
  cover: cover.data.attributes.url,
  author: author.data.attributes,
  categories: categories.data,
};
