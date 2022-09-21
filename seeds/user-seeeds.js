const { User } = require('../models');

const userData = [
  {
    username: 'kevin',
    email: 'kevin@gmail.com',
    password: 'firstfakepw',
  },
  {
    username: 'michell',
    email: 'michell@gmail.com',
    password: 'dummypw123',
  },
  {
    username: 'brayan',
    email: 'brayan@gmail.com',
    password: 'anotherpw456',
  },
];

const seedUser = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUser;
