const todoDb = require('../../../../data-access/todoDb');

const todoSchema = require('../../../../validation/schema/todo');

const createValidation = require('../../../../validation')(todoSchema.createSchema);
const updateValidation = require('../../../../validation')(todoSchema.updateSchema);
const filterValidation = require('../../../../validation')(todoSchema.filterValidationSchema);
const addTodoUsecase = require('../../../../use-case/todo/addTodo')({
  todoDb,
  createValidation 
});
const findAllTodoUsecase = require('../../../../use-case/todo/findAllTodo')({
  todoDb,
  filterValidation
});
const getTodoCountUsecase = require('../../../../use-case/todo/getTodoCount')({
  todoDb,
  filterValidation
});
const softDeleteManyTodoUsecase = require('../../../../use-case/todo/softDeleteManyTodo')({ todoDb });
const bulkInsertTodoUsecase = require('../../../../use-case/todo/bulkInsertTodo')({ todoDb });
const bulkUpdateTodoUsecase = require('../../../../use-case/todo/bulkUpdateTodo')({ todoDb });
const deleteManyTodoUsecase = require('../../../../use-case/todo/deleteManyTodo')({ todoDb });
const softDeleteTodoUsecase = require('../../../../use-case/todo/softDeleteTodo')({ todoDb });
const partialUpdateTodoUsecase = require('../../../../use-case/todo/partialUpdateTodo')({ todoDb });
const updateTodoUsecase = require('../../../../use-case/todo/updateTodo')({
  todoDb,
  updateValidation 
});
const getTodoUsecase = require('../../../../use-case/todo/getTodo')({
  todoDb,
  filterValidation
});
const deleteTodoUsecase = require('../../../../use-case/todo/deleteTodo')({ todoDb });

const todoController = require('./todo');

const addTodo = todoController.addTodo(addTodoUsecase);
const findAllTodo = todoController.findAllTodo(findAllTodoUsecase);
const getTodoCount = todoController.getTodoCount(getTodoCountUsecase);
const softDeleteManyTodo = todoController.softDeleteManyTodo(softDeleteManyTodoUsecase);
const bulkInsertTodo = todoController.bulkInsertTodo(bulkInsertTodoUsecase);
const bulkUpdateTodo = todoController.bulkUpdateTodo(bulkUpdateTodoUsecase);
const deleteManyTodo = todoController.deleteManyTodo(deleteManyTodoUsecase);
const softDeleteTodo = todoController.softDeleteTodo(softDeleteTodoUsecase);
const partialUpdateTodo = todoController.partialUpdateTodo(partialUpdateTodoUsecase);
const updateTodo = todoController.updateTodo(updateTodoUsecase);
const getTodoById = todoController.getTodo(getTodoUsecase);
const deleteTodo = todoController.deleteTodo(deleteTodoUsecase);

module.exports = {
  addTodo,
  findAllTodo,
  getTodoCount,
  softDeleteManyTodo,
  bulkInsertTodo,
  bulkUpdateTodo,
  deleteManyTodo,
  softDeleteTodo,
  partialUpdateTodo,
  updateTodo,
  getTodoById,
  deleteTodo,
};