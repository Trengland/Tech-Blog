const router = require('express').Router();
const { User } = require('../../models');

// Create a new user
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
      res.json(newUser);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] }
    });
    res.json(userData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});



// Log in an existing user
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
      res.json({ user, message: 'You are logged in!' });
    });

  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


// Sign up a new user
// router.post('/signup', async (req, res) => {
//   try {
//     const user = await User.findOne({ where: { username: req.body.username } });
//     if (user) {
//       res.status(400).json({ message: 'Username already exists. Please try again!' });
//       return;
//     }

//     const newUser = await User.create(req.body);

//     req.session.save(() => {
//       req.session.user_id = newUser.id;
//       req.session.logged_in = true;
//       res.json({ newUser, message: 'You are now signed up!' });
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });


// Log out the current user
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
