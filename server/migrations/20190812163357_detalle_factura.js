
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable( 'detalle_factura', function( table ) {
    table.increments('id');
    table.integer('cantidad');
    table.decimal('precio');
    table.decimal('descuento');
    table.integer('idmaterial').references('id').inTable('material');
    table.integer('idfactura').references('id').inTable('factura');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists( 'detalle_factura' )
  
};
