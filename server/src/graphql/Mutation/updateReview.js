const knex = require('../../db/knex');

const updateReview = async (_, args) => {
    await knex('review')
        .where({id: args.id})
        .update({...args});
    
    return knex('review')
        .where({id: args.id})
        .first();
}

module.exports = updateReview;