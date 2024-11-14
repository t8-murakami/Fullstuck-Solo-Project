/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('paths',(table)=>{
    table.increments('id').primary();//ID
    table.string('description').notNullable();//説明
    table.string('path').notNullable();//path
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('paths')
};
