
exports.up = function(knex) {
  return knex.schema.createTable('descriptions', tbl => {
      tbl.increments('id');
      tbl.string('description')
        .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('descriptions')
};
