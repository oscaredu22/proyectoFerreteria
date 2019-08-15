
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable( 'pedido', function( table ) {
        table.increments('id');
        table.timestamp('fecha');
        table.decimal('total');
        table.integer('idproveedor').references('id').inTable('proveedor');
      })
  
};
exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists( 'pedido' )
};
