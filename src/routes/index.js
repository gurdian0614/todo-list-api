const {Router} = require('express');
const router = Router();
const controller = require('../controllers');

router.get('/tasks', controller.getTasks);
router.get('/tasks/:id', controller.getTaskById);

module.exports = router;