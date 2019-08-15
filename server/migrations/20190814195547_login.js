
exports.up = function(knex) {
    return knex.schema
    .createTable('login', function(table) {
      table.increments('id').notNullable();
      table.string('nombre').notNullable();
      table.string('apellido').notNullable();
      table.string('password').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists( 'login' )
};
