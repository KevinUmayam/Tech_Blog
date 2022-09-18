const router = require('express').Router();
const { Techpost, User } = require('../models');
const withAuth = require('../utils/auth');

module.exports = router;
