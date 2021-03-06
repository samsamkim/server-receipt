
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'Admin', 'last_name': 'Paperless', 'email': 'admin', 'password':'admin', admin: true},
        {first_name: 'Sam', 'last_name': 'Kim', 'email': 'email@email.com', 'password':'12345', admin: false},
        {first_name: 'Melvin', 'last_name': 'Barbosa', 'email': 'mail@mail.com', 'password':'12345',admin: false},
        {first_name: 'Cherie', 'last_name': 'Simkins', 'email': 'email@gmail.com', 'password':'12345',admin: false},
        {first_name: 'Amanda', 'last_name': 'Railey', 'email': 'test@test.com', 'password':'12345',admin: false},
        {first_name: 'Lisa', 'last_name': 'Garcia', 'email': 'test@gmail.com', 'password':'12345',admin: false},
      ]);
    });
};
