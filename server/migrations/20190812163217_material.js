
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable( 'material', function( table ) {
        table.increments('id');
        table.string('nombre');
        table.string('descripcion');
        table.timestamp('fecha_registro');
        table.timestamp('fecha_actualizacion');
        table.decimal('precio');
        table.integer('idnicho').references('id').inTable('nicho');
        table.integer('idproveedor').references('id').inTable('proveedor');
      })
  
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists( 'material' )
  
};
