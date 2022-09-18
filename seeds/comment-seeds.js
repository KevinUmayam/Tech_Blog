const { Comment } = require('../models');

const commentData = [
  {
    user_id: 1,
    content: 'thank you for the gift of knowledge',
    post_id: 1,
  },
  {
    user_id: 2,
    content: 'did you coppy this from mdm web docs?',
    post_id: 3,
  },
  {
    user_id: 3,
    content: 'Sequelize is awesome.',
    post_id: 2,
  },
];

const seedComment = () => User.bulkCreate(commentData);

module.exports = seedComment;
