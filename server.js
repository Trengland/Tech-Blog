// this will 'connect' everytihng - this file needs a lot of const's and middleware callouts to make the app connnected correctly - front and back
const path = require('path')
const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
// initialize express app to give handlbars access to all helper functions
const helpers = require('./utils/helpers')
// instantiate our express app
const app = express()
const PORT = process.env.PORT || 3306
//bring in our connection
const sequelize = require('./config/connection')

const SequelizeStore = require('connect-session-sequelize')(session.Store)

//define our session
const sess = {
    secret: 'My Secret',
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict'
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}

//applying all middleware - passing our helper functions to it
app.use(session(sess))
const hbs = exphbs.create({helpers})
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//specifying this app will run through the public directory
app.use(express.static(path.join(__dirname,'public')))
app.use(require('./controllers/'))

//get port to start listening and sync our db to this app
app.listen(PORT,() => {
    console.log(`App Listening on PORT! ${PORT}`)
    sequelize.sync({force: false})
})