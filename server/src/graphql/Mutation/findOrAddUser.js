const uuid = require('uuid')
const knex = require('../../db/knex')

const findOrAddUser = async (_, args) => {
  let user = knex('user').where({id: args.googleId}).first();
  if(!user){
    const id = uuid.v4()
    const user = { id, ...args }
    await knex('user').insert(user)
  }    
  return user
}

module.exports = findOrAddUser
