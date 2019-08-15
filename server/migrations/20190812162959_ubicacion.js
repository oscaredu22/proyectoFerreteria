
exports.up = function(knex) {
 
    return knex.schema
    .createTable( 'ubicacion', function( table ) {
      table.increments('id');
      table.string('nombre');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
      .dropTableIfExists( 'ubicacion' )
  
};
