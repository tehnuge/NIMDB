const addReview = require('./addReview');
const updateReview = require('./updateReview');
const addMedia = require('./addMedia');
const findOrAddUser = require('./findOrAddUser');

const Mutation = {
  addReview,
  updateReview,
  addMedia,
  findOrAddUser
}

module.exports = Mutation;
