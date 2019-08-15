
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable( 'detalle_reclamo', function( table ) {
        table.increments('id');
        table.integer('cantidad');
        table.decimal('precio_pedido');
        table.decimal('precio_llegada');
        table.integer('idreclamo').references('id').inTable('reclamo');
        table.integer('idpedido').references('id').inTable('pedido');
        table.integer('idmaterial').references('id').inTable('material');
      })
  
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists( 'detalle_reclamo' )
  
};
