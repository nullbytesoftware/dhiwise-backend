/**
 *softDeleteTodo.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Todo. {status, message, data}
 */
const softDeleteTodo = ({ todoDb }) => async (params,req,res) => {
  let updatedTodo = await todoDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedTodo){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedTodo });
};
module.exports = softDeleteTodo;