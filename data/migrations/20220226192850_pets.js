exports.up = function (knex) {
  return knex.schema

    .createTable("owners", (tbl) => {
      tbl.increments("owner_id");
      tbl.string("owner_name").notNullable();
    })
    .createTable("pets", (tbl) => {
      tbl.increments("pet_id");
      tbl.string("pet_name").notNullable();
      tbl.string("pet_type").notNullable();
      tbl.integer("pet_age").notNullable();
      tbl
        .integer("owner_id")
        .unsigned()
        .notNullable()
        .references("owner_id")
        .inTable("owners")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("pets")
    .dropTableIfExists("owners");
};
