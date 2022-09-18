const User = require('./User');
const Techpost = require('./Techpost');

User.hasMany(Techpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Techpost.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Techpost };
