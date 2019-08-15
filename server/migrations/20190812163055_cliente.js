
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable( 'cliente', function( table ) {
        table.increments('id');
        table.string('identificacion').notNullable().unique();
        table.string('nombre');
        table.string('apellido');
        table.string('direccion');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists( 'cliente' )
};