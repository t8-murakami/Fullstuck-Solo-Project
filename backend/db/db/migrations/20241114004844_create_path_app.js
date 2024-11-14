exports.up = function (knex) {
    return knex.schema.createTable('paths', (table) => {
      table.increments('id').primary();
      table.string('description').notNullable();
      table.string('path').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('paths');
  };
  