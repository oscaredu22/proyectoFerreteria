
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable( 'albaran', function( table ) {
    table.increments('id');
    table.integer('idpedido').references('id').inTable('pedido');
    table.timestamp('fecha_entrega');
    table.decimal('total');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists( 'albaran' )
  
    
};
