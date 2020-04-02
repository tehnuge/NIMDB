const uuid = require('uuid')
const knex = require('../../db/knex')

const addReview = async (_, args) => {
  const id = uuid.v4()
  const review = { id, ...args }

  await knex('review').insert(review)

  return review
}

module.exports = addReview
