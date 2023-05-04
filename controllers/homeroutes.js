const router = require('express').Router();
const { Blogpost, Comment, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Blogpost.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['username'],
            },
          ],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('allposts', {
      posts,
      loggedIn: req.session.loggedIn,
      layout: 'main',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
