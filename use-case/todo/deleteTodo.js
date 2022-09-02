
/**
 *deleteTodo.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Todo. {status, message, data}
 */
const deleteTodo = ({ todoDb }) => async (query,req,res) => {
  let deletedTodo = await todoDb.deleteOne(query);
  if (!deletedTodo){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedTodo });
};

module.exports = deleteTodo;