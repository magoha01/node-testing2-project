
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('owners').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('owners').insert([
        {owner_name: 'Hailey'},
        {owner_name: 'Alexandre'},
      ])
    });
};
