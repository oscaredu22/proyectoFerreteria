
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('usuarios').del()
    .then(function () {
      // Inserts seed entries
      return knex('usuarios').insert([
        { nombre: 'Noemi',
          apellido: 'Bastidas',
          cedula: '1725393738',
          telefono: '0987991621',
          password: '1234'
        },
        { nombre: 'Francisco',
          apellido: 'Borja',
          cedula: '1726345388',
          telefono: '0987654321',
          password: '123'
        }
      ]);
    });
};
