
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable( 'detalle_pedido', function( table ) {
    table.increments('id');
    table.string('nombre');
    table.integer('cantidad');
    table.decimal('precio');
    table.integer('idpedido').references('id').inTable('pedido');
    table.integer('idmaterial').references('id').inTable('material');
  })
};
exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists( 'detalle_pedido' )
  
};
