const {Router} = require('express');
const router = Router();
const controller = require('../controllers');

router.get('/tasks', controller.getTasks);

module.exports = router;