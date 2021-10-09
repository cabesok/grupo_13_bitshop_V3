let db = require("../database/models");
let bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator");

module.exports = {

    login: (req, res) => res.render("users/login", {style: "login.css", title: "User | Login"}),

    register: (req, res) => res.render("users/register", {style: "register.css", title: "User | Register"}),

    userDetail: (req, res) => res.render("users/userDetail", {style: "userDetail.css", title: "User | Detail", user: req.session.userLogged}),

    logout: (req, res) => {
        req.session.destroy();
        return res.redirect("/");
    },


    access: async function (req, res){

        /* const errors = validationResult(req); */
        
        let userToLogin = await 
            db.Users.findOne({where: {
                user_name: req.body.user_name
                /* email: req.body.email */
            }});
            
            
            if (userToLogin){
                let PasswordOk = bcrypt.compareSync(req.body.password, userToLogin.password);
                if (PasswordOk){
                    /* delete userToLogin.password; */
                    req.session.userLogged = userToLogin;
                    return res.redirect("/")
                    /* return res.render("/user/userDetail") */
                }
                
                
                } else {
                return res.render("login"/* , {errors: errors.errors} */);
                /* return res.render("login", {errors: {email:{msg: "No se encuentra el email en la base de datos"}}}); */
            }
        },
        
    save: async function(req, res) {
        /* const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('userRegisterForm', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		} */

        // Faltaria validar que no haya un usuario registrado con el mismo mail

        const errors = validationResult(req);

        if (errors.isEmpty()){
            db.Users.create({
                user_name: req.body.user_name,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                image: req.file.filename, // req.file.image ?
                category_id: req.body.category
            })
            /* await */ res.redirect("/user/login");
            /* .then(data => res.redirect("/")); */
        } else {

        
        return res.render ("users/register", {
            style: "register.css", 
            title: "User | Register",
            errors: errors.array(), 
            oldData: req.body}) // errors.mapped() ?
} }
    
}