const { Blogpost } = require('../models');

const blogpostData = [
  {
    title: 'My First Blog Post',
    content: 'This is the content of my first blog post.'
  },
  {
    title: 'My Second Blog Post',
    content: 'This is the content of my second blog post.'
  },
  {
    title: 'My Third Blog Post',
    content: 'This is the content of my third blog post.'
  }
];

const seedBlogposts = () => Blogpost.bulkCreate(blogpostData);

module.exports = seedBlogposts;
