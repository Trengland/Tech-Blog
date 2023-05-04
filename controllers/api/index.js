// crud
const router = require('express').Router();

const blogpostRoutes = require('./blogpostroutes');
const commentRoutes = require('./commentroutes');
const userRoutes = require('./userroutes');

router.use('/blogposts', blogpostRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;
