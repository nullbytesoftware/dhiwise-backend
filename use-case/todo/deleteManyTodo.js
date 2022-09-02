/**
 *deleteManyTodo.js
 */

const response = require('../../utils/response');
/**
 * @description : delete records from database by using ids.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : no of documents deleted. {status, message, data}
 */
const deleteManyTodo = ({ todoDb }) => async (query,req,res) => {
  let deletedTodo = await todoDb.deleteMany(query);
  return response.success({ data: { count : deletedTodo } });
};
module.exports = deleteManyTodo;