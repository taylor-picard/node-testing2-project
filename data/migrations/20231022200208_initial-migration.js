
exports.up = function(knex) {
  return knex.schema
    .createTable("names", table => {
        table.increments("name_id")
        table.text("firstName").notNullable()
        table.text("lastName").notNullable()
    })
};


exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("names")
};
