
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable( 'reclamo', function( table ) {
        table.increments('id');
        table.timestamp('fecha');
        table.string('comentario');
      })
  
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists( 'reclamo' )
};
