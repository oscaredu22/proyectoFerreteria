
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable( 'detalle_albaran', function( table ) {
        table.increments('id');
        table.integer('idalbaran').references('id').inTable('albaran');
        table.integer('idmaterial').references('id').inTable('material');
        table.integer('cantidad');
        table.decimal('precio');
    })
};
exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists( 'detalle_albaran' )
  
};
