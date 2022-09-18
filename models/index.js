const User = require('./User');
const Techpost = require('./Techpost');
const Comment = require('./Comment');

User.hasMany(Techpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Techpost.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

Techpost.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Techpost, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Techpost };
