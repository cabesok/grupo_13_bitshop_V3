/* const product = require("../models/user"); */
module.exports = {
    login: (req, res) => res.render("users/login", {style: "login.css", title: "User | Login"}),
    register: (req, res) => res.render("users/register", {style: "register.css", title: "User | Register"})
    /* access: ,
    save:  */
}