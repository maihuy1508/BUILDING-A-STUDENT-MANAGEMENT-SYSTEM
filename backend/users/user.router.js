const { createUser, getUser, deleteUser, login } = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../auth/token_validation");

router.post("/" ,createUser);
router.get("/",checkToken , getUser);
router.delete("/",checkToken ,deleteUser);
router.post("/login",login);

module.exports = router;
