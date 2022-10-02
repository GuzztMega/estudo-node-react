const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');

router.get('/:id', TaskController.get)
router.get('/filter/all', MacaddressValidation, TaskController.getAll)
router.get('/filter/late', MacaddressValidation, TaskController.late)
router.get('/filter/today', MacaddressValidation, TaskController.today)

router.put('/:id', TaskValidation, TaskController.update);
router.put('/:id/:done', TaskController.done);

router.post('/', TaskValidation, TaskController.create);
router.delete('/:id', TaskController.delete);

module.exports = router;  