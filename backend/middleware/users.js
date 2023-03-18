const jwt =require('jsonwebtoken');

module.exports = {
    validateRegister: (req, res, next) =>{
        // UserName min length 3
        if(!req.body.name || req.body.name.length < 3) {
            return res.status(400).send({
                message:"hãy diền tài khoản ít nhất 3 chữ",
            });
    }
         // Password min 6 chars
         if(!req.body.password || req.body.password.length < 6) {
            return res.status(400).send({
                message:"hãy diền mật khẩu ít nhất 6 kí tự",
            });
    }
        // Password (repeat) must match
        if(
            !req.body.password_repeat || 
            req.body.password != req.body.password_repeat
            ) {
            return res.status(400).send({
                message:"hãy diền mật khẩu ít nhất 6 kí tự",
            });
    }
    next();
    },
    isLoggedIn: () => {},
};