const knex = require('../../db/knex')
const medias = () => knex('media')
module.exports = medias