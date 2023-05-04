//the file to start with

//establish conenction to mySQL db using sequelize
const Sequelize = require('sequelize')
require('dotenv').config()

// resource i need to use on heroku - add this in setting section on heroku
const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL) // if jawsdb exists we're creating new sequelize connection using that
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306 //default mysql port
    })

module.exports = sequelize