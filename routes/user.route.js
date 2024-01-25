const express=require("express")
const router = express.Router();

const {displayWelcome, login} = require("../controllers/user.controller")





router.get("/", displayWelcome);
router.get("/login", login);


module.exports = router;