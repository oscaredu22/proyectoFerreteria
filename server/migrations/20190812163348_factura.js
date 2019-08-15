
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable( 'factura', function( table ) {
        table.increments('id');
        table.timestamp('fecha');
        table.decimal('total');
        table.integer('idcliente').references('id').inTable('cliente');
      })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists( 'factura' )
  
};
