const knex = require('../../db/knex');

const media = (_, { id }) => 
  knex('media')
    .where({ id })
    .first()

module.exports = media;