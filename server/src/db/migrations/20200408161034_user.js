exports.up = function(knex) {
    return knex.schema
      .createTable('user', user => {
        user
          .uuid('id')
          .notNullable()
          .primary()
        user
          .string('name')
        user
          .string('googleId')
        user
          .timestamps()
        })
      .table('review', review => {
        review.uuid('userId')
          .references('id')
          .inTable('user')
      })
  }
  exports.down = function(knex) {
    return knex.schema
      .dropTable('user')
  }