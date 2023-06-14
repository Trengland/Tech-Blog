const router = require('express').Router();
const { Blogpost, User } = require('../../models');

// CREATE a new post
router.post('/', async (req, res) => {
  try {
    const postData = await Blogpost.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.userId,
    });

    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET all posts
router.get('/', async (req, res) => {
  try {
    const postData = await Blogpost.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
      res.json(postData);
    }
    catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



// UPDATE a post
router.put('/:id', async (req, res) => {
  try {
    const postData = await Blogpost.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// DELETE a post
router.delete('/:id', async (req, res) => {
  try {
    const postData = await Blogpost.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
