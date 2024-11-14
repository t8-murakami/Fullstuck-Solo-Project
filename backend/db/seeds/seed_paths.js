/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('paths').del()

  await knex('paths').insert([
    { description: 'ホームディレクトリ', path: '/home/user' },
    { description: 'ドキュメントフォルダ', path: '/home/user/documents' },
    { description: 'ダウンロードフォルダ', path: '/home/user/downloads' },
  ]);
};
