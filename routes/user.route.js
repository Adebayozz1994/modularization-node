const express = require ("express")
const router = express.Router();


const {displayWelcome, login, register, upLoadFile, verifyToken} = require("../controllers/user.controller")





router.get("/", displayWelcome);
router.post("/register", register);
router.post("/login", login);
router.post("/upLoadFile", upLoadFile);
router.post("/verifyToken", verifyToken);



module.exports = router;