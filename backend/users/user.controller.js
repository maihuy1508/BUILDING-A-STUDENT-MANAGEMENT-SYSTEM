const { genSaltSync, hashSync, compareSync } = require("bcryptjs");
const { create, getUser, deleteUser, getUserByUserEmail } = require("./user.service");
const { sign } = require("jsonwebtoken");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success:1,
                data: result
            });
        });
    },
    getUser: (req, res) => {
        getUser((err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                data: result
            });
        });
    },
    deleteUser: (req, res) =>{
        const data = req.body;
        deleteUser(data, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!result) {
                return res.json({
                    success:0,
                    message: "record not found"
                });
            }
            return res.json({
                success:1,
                message: 'Delete successfully'
            });
        });
    },
    login: (req, res) => {
        const body = req.body;
        getUserByUserEmail(body.email, (err, result) => {
            if (err) {
                console.log(err);
            }
            if (!result) {
                return res.json({
                    success:0, 
                    data : "Invalid email or password"
                });
            }
             result = compareSync(body.password, result.password);
            if (result) {
                result.password = undefined;
                const jsontoken = sign({ result: result }, "huy1234", {
                    expiresIn: "1h"
                });
                return res.json({
                    success: 1,
                    message: "login thành công",
                    token: jsontoken
                });
            } else {
                return res.json ({
                    success:0,
                    data: "Sai tài khoản hoặc mật khẩu"
                })
            }
        });
    }
};