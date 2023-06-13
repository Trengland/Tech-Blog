const router = require('express').Router();

const apiroutes = require('./api');
const homeroutes = require('./homeroutes');
const dashboardroutes = require('./dashboardroutes');

router.use('/', homeroutes);
router.use('/api', apiroutes);
router.use('/dashboard', dashboardroutes);


// const { Blogpost, User } = require('../models');

// // GET all posts on the homepage
// router.get('/', async (req, res) => {
//   try {
//     const postData = await Blogpost.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['username'],
//         },
//       ],
//     });

//     const posts = postData.map((post) => post.get({ plain: true }));

//     res.render('allposts', { posts, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;