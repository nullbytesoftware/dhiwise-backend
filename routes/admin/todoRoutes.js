const express = require('express');
const router = express.Router();
const todoController = require('../../controller/admin/todo');
const {
  auth,checkRolePermission,
} = require('../../middleware');
const { PLATFORM } =  require('../../constants/authConstant'); 

router.route('/admin/todo/create').post(auth(PLATFORM.ADMIN),checkRolePermission,todoController.addTodo);
router.route('/admin/todo/list').post(auth(PLATFORM.ADMIN),checkRolePermission,todoController.findAllTodo);
router.route('/admin/todo/count').post(auth(PLATFORM.ADMIN),checkRolePermission,todoController.getTodoCount);
router.route('/admin/todo/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,todoController.softDeleteManyTodo);
router.route('/admin/todo/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,todoController.bulkInsertTodo);
router.route('/admin/todo/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,todoController.bulkUpdateTodo); 
router.route('/admin/todo/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,todoController.deleteManyTodo);
router.route('/admin/todo/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,todoController.softDeleteTodo);
router.route('/admin/todo/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,todoController.partialUpdateTodo);   
router.route('/admin/todo/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,todoController.updateTodo);   
router.route('/admin/todo/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,todoController.getTodoById);
router.route('/admin/todo/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,todoController.deleteTodo);

module.exports = router;
