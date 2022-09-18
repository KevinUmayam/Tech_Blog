const { User } = require('../models');

const userData = [
  {
    name: 'kevin',
    email: 'kevin@gmail.com',
    password: 'firstfakepw',
  },
  {
    name: 'michell',
    email: 'michell@gmail.com',
    password: 'dummypw123',
  },
  {
    name: 'brayan',
    email: 'brayan@gmail.com',
    password: 'anotherpw456',
  },
];

const seedUser = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUser;
