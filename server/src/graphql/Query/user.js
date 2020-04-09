const knex = require('../../db/knex');
const user = (_, { id }) => 
  knex('user')
    .where({ id })
    .first();

module.exports = user;