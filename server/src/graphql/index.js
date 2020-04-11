const Query = require('./Query')
const Media = require('./resolvers/Media')
const Review = require('./resolvers/Review')
const User = require('./resolvers/User')
const Mutation = require('./Mutation')
const resolvers = {
  User,
  Media,
  Query,
  Review,
  Mutation
}
module.exports = { resolvers }