const express = require('express');
const router = express.Router();
const todoController = require('../../../controller/device/v1/todo');
const { auth, } = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/device/api/v1/todo/create').post(auth(PLATFORM.DEVICE),todoController.addTodo);
router.route('/device/api/v1/todo/list').post(auth(PLATFORM.DEVICE),todoController.findAllTodo);
router.route('/device/api/v1/todo/count').post(auth(PLATFORM.DEVICE),todoController.getTodoCount);
router.route('/device/api/v1/todo/softDeleteMany').put(auth(PLATFORM.DEVICE),todoController.softDeleteManyTodo);
router.route('/device/api/v1/todo/addBulk').post(auth(PLATFORM.DEVICE),todoController.bulkInsertTodo);
router.route('/device/api/v1/todo/updateBulk').put(auth(PLATFORM.DEVICE),todoController.bulkUpdateTodo); 
router.route('/device/api/v1/todo/deleteMany').post(auth(PLATFORM.DEVICE),todoController.deleteManyTodo);
router.route('/device/api/v1/todo/softDelete/:id').put(auth(PLATFORM.DEVICE),todoController.softDeleteTodo);
router.route('/device/api/v1/todo/partial-update/:id').put(auth(PLATFORM.DEVICE),todoController.partialUpdateTodo);   
router.route('/device/api/v1/todo/update/:id').put(auth(PLATFORM.DEVICE),todoController.updateTodo);   
router.route('/device/api/v1/todo/:id').get(auth(PLATFORM.DEVICE),todoController.getTodoById);
router.route('/device/api/v1/todo/delete/:id').delete(auth(PLATFORM.DEVICE),todoController.deleteTodo);

module.exports = router;
