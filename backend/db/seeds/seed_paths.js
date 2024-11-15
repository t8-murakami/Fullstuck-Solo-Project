/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('paths').del()

  await knex('paths').insert([
    { description: 'ホームディレクトリ', path: '/home/user' },
    { description: 'ドキュメントフォルダ1', path: '/home/user/documents1' },
    { description: 'ドキュメントフォルダ2', path: '/home/user/documents2' },
    { description: 'ドキュメントフォルダ3', path: '/home/user/documents3' },
    { description: 'ドキュメントフォルダ4', path: '/home/user/documents4' },
    { description: 'ドキュメントフォルダ5', path: '/home/user/documents5' },
    { description: 'ドキュメントフォルダ6', path: '/home/user/documents6' },
    { description: 'ドキュメントフォルダ7', path: '/home/user/documents7' },
    { description: 'ドキュメントフォルダ8', path: '/home/user/documents8' },
    { description: 'ドキュメントフォルダ9', path: '/home/user/documents9' },
    { description: 'ドキュメントフォルダ10', path: '/home/user/documents10' },
    { description: 'ドキュメントフォルダ11', path: '/home/user/documents11' },
    { description: 'ダウンロードフォルダ1', path: '/home/user/downloads1' },
    { description: 'ダウンロードフォルダ2', path: '/home/user/downloads2' },
    { description: 'ダウンロードフォルダ3', path: '/home/user/downloads3' },
    { description: 'ダウンロードフォルダ4', path: '/home/user/downloads4' },
    { description: 'ダウンロードフォルダ5', path: '/home/user/downloads5' },
    { description: 'ダウンロードフォルダ6', path: '/home/user/downloads6' },
    { description: 'ダウンロードフォルダ7', path: '/home/user/downloads7' },
    { description: 'ダウンロードフォルダ8', path: '/home/user/downloads8' },
    { description: 'ダウンロードフォルダ9', path: '/home/user/downloads9' },
    { description: 'テストフォルダ', path: '/home/user/test' },
  ]);
};
