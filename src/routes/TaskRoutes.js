const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');

router.get('/:id', TaskController.get)
router.get('/filter/all', MacaddressValidation, TaskController.getAll)

router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);

module.exports = router;  