exports.up = function(knex) {
    return knex.schema
      .createTable('review', review => {
        review
          .uuid('id')
          .notNullable()
          .primary()
        review
          .string('title')
          .notNullable()
        review
          .integer('score')
        review
          .string('content')
        review
          .timestamps()
        review
          .uuid('mediaId')
          .references('id')
          .inTable('media')
        })
  }
  exports.down = function(knex) {
    return knex.schema
      .dropTable('review')
  }