const express = require("express")
const app = express()
require("dotenv").config()
let PORT = process.env.PORT
const userRouter = require("./routes/user.route")

// app.use(express.json())
app.use("/", userRouter)




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} `);
});