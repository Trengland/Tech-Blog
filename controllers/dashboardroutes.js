// think of these like my html routes - routing me to different locations in my app
const router = require('express').Router();
const { Blogpost, Comment, User } = require('../models');
const withAuth = require('../utils/auth');


// GET all posts for the dashboard
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Blogpost.findAll({
      where: {
        user_id: req.session.userId,
      },
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('allpostsdashboard', {
      posts,
      loggedIn: true,
      layout: 'dashboard',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET a single post for the dashboard
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Blogpost.findByPk(req.params.id, {
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

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    const post = postData.get({ plain: true });

    res.render('editpost', {
      post,
      loggedIn: true,
      layout: 'dashboard',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
