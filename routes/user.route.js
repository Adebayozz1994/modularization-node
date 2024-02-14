const express = require ("express")
const router = express.Router();

const {displayWelcome, login, register, upLoadFile} = require("../controllers/user.controller")





router.get("/", displayWelcome);
router.post("/register", register);
router.post("/login", login);
router.post("/upLoadFile", upLoadFile);




module.exports = router;