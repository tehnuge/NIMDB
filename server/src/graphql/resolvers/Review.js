const knex = require('../../db/knex');

module.exports = {
  id: obj => obj.id,
  title: obj => obj.title,
  score: obj => obj.score,
  content: obj => obj.content,
  media: obj => 
    knex('media')
      .where({ id: obj.mediaId })
      .first(),
}