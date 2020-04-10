const uuid = require('uuid')
const knex = require('../../db/knex')

const findOrAddUser = async (_, args) => {
  return knex('user')
    .where({ googleId: args.googleId })
    .then((res) => {
      if(res.length < 1) {
        const id = uuid.v4()
        user = { id, ...args }

        return knex('user').insert(user).then(() => {
          return knex('user').where({ googleId: args.googleId }).first()
        })
      } else {
        return res[0]
      }
    })
}

module.exports = findOrAddUser
