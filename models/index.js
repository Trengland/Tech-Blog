const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
      }
    );

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./User')(sequelize, Sequelize);
db.Blogpost = require('./Blogpost')(sequelize, Sequelize);
db.Comment = require('./Comment')(sequelize, Sequelize);

db.User.hasMany(db.Blogpost, {
  foreignKey: 'user_id',
});

db.Blogpost.belongsTo(db.User, {
  foreignKey: 'user_id',
});

db.User.hasMany(db.Comment, {
  foreignKey: 'user_id',
});

db.Comment.belongsTo(db.User, {
  foreignKey: 'user_id',
});

db.Blogpost.hasMany(db.Comment, {
  foreignKey: 'blogpost_id',
});

db.Comment.belongsTo(db.Blogpost, {
  foreignKey: 'blogpost_id',
});

module.exports = db;
