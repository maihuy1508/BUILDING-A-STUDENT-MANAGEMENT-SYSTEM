const express = require('express');

const router = express.Router();

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const db = require('../until/database');



const userMiddleware = require("../middleware/users");
const { validateRegister } = require('../middleware/users');
const { escape } = require('../until/database');

//sign-up
router.post('/sign-up', userMiddleware.validateRegister ,(req, res, next)=>{
    db.query(
        `SELECT id_AC FROM account WHERE LOWER(name) = LOWER(${req.body.name})`, 
    (err, result) => {
        if(result.length) {
            //error
            return res.status(409).send({
                    message: 'this username is already in use!'
            });
        } else {
            // username not in use
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err) {
                    throw err;
                    return res.status(500).send({
                        message: err,
                    });
                }else {
                    db.query(
                        `INSERT INTO account (id, name, password) VALUES ('${uuid.v4()}',${db.escape(
                            req.body.name)}
                            , '${hash}');`,
                    (err, result) => {
                        if(err) {
                            throw err;
                            return res.status(400).send({
                                message: err,
                            });
                        }
                        return res.status(201).send({
                            message: "Registered!",
                        });
                    });
                }
            });
        }
    });
});

//login
router.post('/login', (req, res, next)=>{
    db.query(`SELECT * FROM account WHERE name = ${db,escape(req.body.name)};`,
    (err, result) => {
        if (err) {
            throw err;
            return res.status(400).send({
                message: err,
            });
        }
        if(!result.length) {
            return res.status(400).send({
                message: 'Username or password incorrect!',
            });
        }
        bcrypt.compare(req.body.password, result[0]['password'], 
        (bErr, bResult) => {
            if(bErr) {
                throw bErr;
                return res.status(400).send({
                    message:"Username or password incorrect!",
                });
            }
            if(bResult) {
                const token = jwt.sign({
                    name: result[0].name,
                    id_AC: result[0].id,
                }, 
                "SECRETKEY",
                { expiresIn: "7d" }
                );
                db.query(`UPDATE account SET last_login = now() WHERE id = ${result[0].id};`
                )
                return res.status(200).send({
                    message: ' Logged in!',
                    token,
                    user: result[0]
                });
            } 
            return res.status(401).send({
                message:"Username or password incorrect!", 
        }) 
            }
        );
    }
    );

});
//secret-route
router.get('/secrect-router', (req, res, next)=>{

})

module.exports = router;