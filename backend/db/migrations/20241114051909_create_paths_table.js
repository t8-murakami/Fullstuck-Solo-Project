/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('paths',(table)=>{
    table.increments('id').primary();//ID
    table.string('description').notNullable();//説明
    table.string('path').notNullable();//path
    table.timestamp('created_at').defaultTo(knex.fn.now());//新しいレコードが挿入された際に、自動で作成日時が記録されるそう
    table.timestamp('updated_at').defaultTo(knex.fn.now()); // 更新日時

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('paths')
};
