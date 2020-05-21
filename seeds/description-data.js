
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('descriptions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('descriptions').insert([
        {id: 1, description: 'Wonderful'},
        {id: 2, description: 'Very smart'},
        {id: 3, description: 'Pretty'}
      ]);
    });
};
