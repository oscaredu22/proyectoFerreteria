
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('usuarios', function(table) {
    table.increments('id').notNullable();
    table.string('nombre').notNullable();
    table.string('apellido').notNullable();
    table.string('cedula').notNullable();
    table.string('telefono').notNullable();
    table.string('password').notNullable();
})
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists( 'usuarios' )
  
};
