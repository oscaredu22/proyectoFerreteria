
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable( 'proveedor', function( table ) {
        table.increments('id');
        table.string('identificacion').notNullable().unique();
        table.string('nombre');
        table.string('direccion');
        table.string('telefono');
      })
  
};

exports.down = function(knex, Promise) {
    return knex.schema
      .dropTableIfExists( 'proveedor' )
};
