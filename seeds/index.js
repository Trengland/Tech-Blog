// responsible for running all the seed files and populating the database with sample data.
const sequelize = require('../config/connection');
const seedUserData = require('./userdata');
const seedBlogData = require('./blogpost');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUserData();

  await seedBlogData();

  process.exit(0);
};

seedAll();
