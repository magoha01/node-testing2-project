exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("pets")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("pets").insert([
        { pet_name: "Oliver", pet_type: "dog", pet_age: "2", owner_id: "1" },
        { pet_name: "Felipe", pet_type: "cat", pet_age: "10", owner_id: "2" },
        { pet_name: "Paco", pet_type: "cat", pet_age: "2", owner_id: "2" },
        { pet_name: "Ada", pet_type: "child", pet_age: "6", owner_id: "2" },
      ]);
    });
};
