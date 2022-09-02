/**
 *addTodo.js
 */

const  todoEntity = require('../../entities/todo');
const response = require('../../utils/response');
/**
 * @description : create new record of todo in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addTodo = ({
  todoDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let todo = todoEntity(dataToCreate);
  todo = await todoDb.create(todo);
  return response.success({ data:todo });
};
module.exports = addTodo;