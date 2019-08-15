
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable( 'nicho', function( table ) {
        table.increments('id');
        table.string('nombre');
        table.integer('idubicacion').references('id').inTable('ubicacion');
      })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists( 'nicho' )
};
