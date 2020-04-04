const uuid = require('uuid')

async function clear(knex) {
  await knex('review').del();
  await knex('media').del();
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
  await knex('review').insert({
    mediaId: mediaId,
    id: uuid.v4(),
    score: 3,
    title: 'This won how many awards..?',
    content: 'I like the scene with the boobies. And the other scene with the boobies. I’m a man now.'
  })

  const mediaId2 = uuid.v4()
  await knex('media').insert({
    id: mediaId2,
    title: 'Inception',
    media_type: 'movie',
    url: 'www.example2.com'
  });
  await knex('review').insert({
    mediaId: mediaId2,
    id: uuid.v4(),
    score: 5,
    title: 'This was the bomb',
    content: 'Chris Nolan flexin’ and as good as it gets'
  })
  // await knex('review').insert({
  //   mediaId: mediaId2,
  //   id: uuid.v4(),
  //   score: 4,
  //   title: 'This movie was goodly',
  //   content: 'But on second viewing, I always skip the first hour. Too much setup if you ask me.'
  // })
}

module.exports = { clear, seed }
