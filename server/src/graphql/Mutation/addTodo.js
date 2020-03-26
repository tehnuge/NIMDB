const uuid = require('uuid')
const knex = require('../../db/knex')
const addTodo = async (_, args) => {
  const id = uuid.v4()
  const todo = { id, ...args }
  await knex('todo').insert(todo)
  return todo
}
module.exports = addTodo