const uuid = require('uuid')
const knex = require('../../db/knex')

const addMedia = async (_, args) => {
  const id = uuid.v4()
  const media = { id, ...args }

  await knex('media').insert(media)

  return media
}

module.exports = addMedia
