const knex = require('../../db/knex');

module.exports = {
  id: obj => obj.id,
  name: obj => obj.name,
  googleId: obj => obj.googleId,
  reviews: obj => 
    knex('review')
      .where({ userId: obj.id })
      .first(),
}