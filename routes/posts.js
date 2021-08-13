const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const postsCtrl = require('../controllers/posts')


router.get('/', auth, postsCtrl.newsfeed)

module.exports = router