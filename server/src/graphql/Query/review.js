const knex = require('../../db/knex');
const review = (_, { id }) => 
  knex('review')
    .where({ id })
    .first();

module.exports = review;