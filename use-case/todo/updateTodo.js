/**
 *updateTodo.js
 */

const  todoEntity = require('../../entities/todo');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Todo. {status, message, data}
 */
const updateTodo = ({
  todoDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let todo = todoEntity(dataToUpdate);
  todo = await todoDb.updateOne(query,todo);
  if (!todo){
    return response.recordNotFound();
  }
  return response.success({ data:todo });
};
module.exports = updateTodo;