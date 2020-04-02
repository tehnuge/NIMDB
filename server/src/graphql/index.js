const Query = require('./Query')
const Media = require('./resolvers/Media')
const Review = require('./resolvers/Review')
const resolvers = {
  Media,
  Query,
  Review,
}
module.exports = { resolvers }