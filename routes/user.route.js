const express = require ("express")
const router = express.Router();

const {displayWelcome, login, register} = require("../controllers/user.controller")





router.get("/", displayWelcome);
router.get("/login", login);
router.post("/register", register);



module.exports = router;