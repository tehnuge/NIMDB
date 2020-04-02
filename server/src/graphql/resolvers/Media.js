const knex = require('../../db/knex');

module.exports = {
  id: obj => obj.id,
  title: obj => obj.title,
  media_type: obj => obj.media_type,
  url: obj => obj.url,
  reviews: obj => knex('review').where({ mediaId: obj.id }),
}