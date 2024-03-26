const knex = require('../config/dbConfig');

class DatabaseService {
  static async getAllUsers() {
    return knex('users').select('*');
  }

  static async updateUser(id, data) {
    return knex('users').where('id', id).update(data);
  }

  // Otros métodos de base de datos...
}

module.exports = DatabaseService;
