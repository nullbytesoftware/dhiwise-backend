module.exports = (todo) => {

  let newTodo = { 
    title: todo.title,
    body: todo.body,
    createdAt: todo.createdAt,
    isDeleted: todo.isDeleted,
    createdBy: todo.createdBy,
    updatedAt: todo.updatedAt,
    addedBy: todo.addedBy,
    updatedBy: todo.updatedBy,
  };

  // remove undefined values
  Object.keys(newTodo).forEach(key => newTodo[key] === undefined && delete newTodo[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newTodo) => {
   *   if (!newTodo.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newTodo) 
   */

  return Object.freeze(newTodo);
};
