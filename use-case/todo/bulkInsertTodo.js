
/**
 *bulkInsertTodo.js
 */

const  todoEntity = require('../../entities/todo');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Todos. {status, message, data}
 */

const bulkInsertTodo = ({ todoDb }) => async (dataToCreate,req,res) => {
  let todoEntities = dataToCreate.map(item => todoEntity(item));
  let createdTodo = await todoDb.create(todoEntities);
  return response.success({ data:{ count:createdTodo.length || 0 } });
};
module.exports = bulkInsertTodo;