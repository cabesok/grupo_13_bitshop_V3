
module.exports = function authMiddleware(req, res, next){
    if (!req.session.userLogged){
        return res.redirect("/user/login");
    } 
    next();
}

/* module.exports = function authMiddleware(req, res, next){
    if (req.session.userLogged != undefined){
        next();
    } else {
        res.send("Esta página es solo para usuarios");
    }
} */