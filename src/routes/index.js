const {Router} = require('express');
const router = Router();
const controller = require('../controllers');

router.get('/tasks', controller.getTasks);
router.get('/tasks/:id', controller.getTaskById);
router.post('/tasks', controller.createTask);
router.put('/tasks/:id', controller.updateTask);

module.exports = router;