const displayWelcome = (req, res) => {
    res.send("Hello World");
    console.log("Hello World");

}

const login = (req, res) => {
    res.send("login");
    console.log("login");

}

module.exports = {displayWelcome, login}; 

