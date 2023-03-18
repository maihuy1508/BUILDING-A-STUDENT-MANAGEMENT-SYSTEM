const db = require('../until/database');
const bcrypt = require('bcryptjs');
const Schema = db.Schema;

module.exports = class User {
    constructor(name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;    
    }

    static find(email) {
        return db.execute('SELECT * FROM account WHERE email = ?', [email]);
    }

    static save(user) {
        return db.execute(
            'INSERT INTO account (name, email, password) VALUES (?,?,?)',
             [user.name, user.email, user.password]
        );
    }
};

const EmployeeSchema = new Schema({
    name: String,
    password: String,
    email: {type: String, unieque: true},

});

