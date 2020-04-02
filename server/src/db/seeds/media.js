const uuid = require('uuid')

async function clear(knex) {
  await knex('media').del();
  await knex('review').del();
}

async function seed(knex) {
  await clear(knex)
  const mediaId = uuid.v4()
  await knex('media').insert({
    id: mediaId,
    title: 'Titanic',
    media_type: 'movie',
    url: 'www.example.com'
  })

  await knex('media').insert({
    id: uuid.v4(),
    title: 'Inception',
    media_type: 'movie',
    url: 'www.example2.com'
  });

  await knex('review').insert({
    mediaId: mediaId,
    id: uuid.v4(),
    title: 'Test action two',
    score: 5,
    content: 'this movie was goodly'
  })
}
module.exports = { clear, seed }