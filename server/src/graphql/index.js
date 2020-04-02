const Query = require('./Query')
const Media = require('./resolvers/Media')
const Review = require('./resolvers/Review')
const Mutation = require('./Mutation')
const resolvers = {
  Media,
  Query,
  Review,
  Mutation
}
module.exports = { resolvers }