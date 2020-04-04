exports.up = function(knex) {
    return knex.schema.createTable('media', media => {
      media
        .uuid('id')
        .notNullable()
        .primary()
      media
        .string('title')
        .notNullable()
      media
        .string('media_type')
        .notNullable()
      media
        .string('url')
    });
  }
  exports.down = function(knex) {
    return knex.schema.dropTable('media')
  }
