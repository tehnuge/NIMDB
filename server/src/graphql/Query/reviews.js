const knex = require('../../db/knex');
const reviews = () => knex('review');
module.exports = reviews;