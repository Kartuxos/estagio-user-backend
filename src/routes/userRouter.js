const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.store)
router.get('/buscar/:foneNumber', userController.show)


module.exports = router;