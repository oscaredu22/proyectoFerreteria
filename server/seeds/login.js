
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('login').del()
    .then(function () {
      // Inserts seed entries
      return knex('login').insert([
        {nombre: 'Oscar', apellido: 'Salvador', password: '123'},
        {nombre: 'Nombre', apellido: 'Apellido'  , password: '456'}
      ]);
    });
};
