const { Blogpost } = require('../models');

const blogpostData = [
  {
    title: 'My First Blog Post',
    content: 'This is the content of my first blog post.',
    user_id: 1
  },
  {
    title: 'My Second Blog Post',
    content: 'This is the content of my second blog post.',
    user_id: 2
  },
  {
    title: 'My Third Blog Post',
    content: 'This is the content of my third blog post.',
    user_id: 3
  }
];

const seedBlogposts = () => Blogpost.bulkCreate(blogpostData);

module.exports = seedBlogposts;
