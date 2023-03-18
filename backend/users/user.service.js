const pool = require("../config/database");

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into account(name, email, password)
            values(?,?,?)`,
            [
                data.name,
                data.email,
                data.password,
            ],
           (error, result, fields) => {
               if (error) {
                    return callback(error);
               }
               return callback(null, result)
           } 
        );
    },
    getUser: callback => {
        pool.query (
            `select * from account`,
            [],
            (error, result, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, result);
            }
        );
    },
    deleteUser: (data, callback) => {
        pool.query(
            `delete from account where id = ?`,
            [data.id],
            (error, result, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, result[0]);
            }
        )
    },
    getUserByUserEmail: (email, callback) => {
        pool.query(
            `select * from account where email = ?`,
            [email],
           (error, result, fields) => {
               if (error) {
                    return callback(error);
               }
               return callback(null, result[0]);
           } 
        );
    },
};