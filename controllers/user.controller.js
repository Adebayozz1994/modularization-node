const Student = require("../model/user.model");
const bcrypt = require('bcrypt')
const cloudinary = require('cloudinary')
require("dotenv").config()
let PIN = process.env.SecretPin
const jwt = require("jsonwebtoken")


cloudinary.config({ 
  cloud_name: 'dzaz4b8pw', 
  api_key: '823433429337669', 
  api_secret: PIN
});


const displayWelcome = (req, res) => {
  res.send("Hello World");
  console.log("Hello World");
}





const register = (req, res) => {
  console.log(req.body);
  let student = new Student(req.body);
  student.save()
    .then((user) => {
      console.log("login successfully");
      res.send({message: "login successfully"});
    })
    .catch((err) => {
      console.log(err);
    })
}



const login = (req, res) => {
  let Secret = process.env.SECRET
  const { email, password } = req.body;

  Student.findOne({ email: req.body.email })
    .then(student => {
      if (!student) {
        console.log("User not found");
        res.status(404).send("User not found");
        return;
      }

      bcrypt.compare(password, student.password)
        .then(match => {
          if (!match) {
            console.log("Invalid password");
            res.status(401).send("Invalid password");
            return;
          }else{

            let token = jwt.sign({ email }, Secret, { expiresIn: "1h" });
            console.log(token);
            console.log("Login successful");
            res.status(200).send({ message: "User signed in successfully", status: true, user: student, token: token });
          }
          
        })
        .catch(error => {
          console.error(error);
          res.status(500).send("Internal server error");
        });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send("Internal server error");
    });
};

  const upLoadFile = (req, res) =>{
    let image=req.body.myFile;
    cloudinary.uploader.upload(image, ((result, err)=>{
     if (err){
      console.log(err)
     }else{
       console.log(result);
       let storedImage = result.secure_url
      res.send({message:"finished upload", status:"true" , storedImage})
     }
    }))
  };


  

  const verifyToken = (req, res) => {
    const {token} = req.body
    const secret = process.env.SECRET
    jwt.verify(token, secret, (err, decoded)=>{
        if (err){
          console.log(err)
        }else{
          console.log("verified successfully")
          res.send({message:"Token verified", status: true, valid:true, token:token, decoded:decoded})
        }
    })
  }
  


module.exports = { displayWelcome, register, login, upLoadFile, verifyToken };

 