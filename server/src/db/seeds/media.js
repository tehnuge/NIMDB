const uuid = require('uuid')

async function clear(knex) {
  await knex('review').del();
  await knex('media').del();
  await knex('user').del();
}

async function seed(knex) {
  await clear(knex)

  const userId = uuid.v4();
  await knex('user').insert({
    id: userId,
    name: "matt",
    googleId: "3241234312GOOGID"
  })

  const mediaId = uuid.v4()
  await knex('media').insert({
    id: mediaId,
    title: 'Titanic',
    media_type: 'movie',
    url: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'
  })
  await knex('review').insert({
    mediaId: mediaId,
    id: uuid.v4(),
    score: 3,
    title: 'This won how many awards..?',
    content: 'I like the scene with the boobies. And the other scene with the boobies. I’m a man now.',
    userId: userId
  })

  const mediaId2 = uuid.v4()
  await knex('media').insert({
    id: mediaId2,
    title: 'Inception',
    media_type: 'movie',
    url: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg'
  });
  await knex('review').insert({
    mediaId: mediaId2,
    id: uuid.v4(),
    score: 5,
    title: 'This was the bomb',
    content: 'Chris Nolan flexin’ and as good as it gets',
    userId: userId
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
