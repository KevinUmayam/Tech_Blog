const router = require('express').Router();
const { Techpost, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Techpost.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ['id', 'title', 'contents', 'date_created'],
      include: [
        {
          model: Comment,
          attributes: [
            'id',
            'commentary',
            'post_id',
            'user_id',
            'date_created',
          ],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const post = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('dashboard', { post, loggedIn: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
