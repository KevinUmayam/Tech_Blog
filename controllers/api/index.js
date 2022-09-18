const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./posts-routes');

router.use('/users', userRoutes);
router.use('/techpost', postRoutes);

module.exports = router;
