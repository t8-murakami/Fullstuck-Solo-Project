const knex = require('../db/knex')

module.exports = {
  async findAll() {
    return knex('paths').select('*')
  },

  async create(description,path){
    return knex('paths')
        .insert({description,path})
  },

  async deleteById(id){
    return knex('paths')
        .where({id}).del();
  },
}