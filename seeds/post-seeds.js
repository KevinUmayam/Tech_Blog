const { Techpost } = require('../models');

const postData = [
  {
    user_id: 3,
    tittle: 'Javascript is awesome',
    content:
      "JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web.JavaScript is easy to learn.",
  },
  {
    user_id: 2,
    tittle: 'what is sequelize?',
    content:
      'Sequelize is a modern TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more. Featuring solid transaction support, relations, eager and lazy loading, read replication and more.',
  },
  {
    user_id: 1,
    tittle: 'why css useful',
    content:
      'CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features. ',
  },
];

const seedPost = () => Techpost.bulkCreate(postData);

module.exports = seedPost;
