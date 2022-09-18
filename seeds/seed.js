const sequelizeConnection = require('../config/connection');
const { User, Techpost, Comment } = require('../models');

const seedUsers = require('./user-seeeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
