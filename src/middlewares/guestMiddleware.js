
module.exports = function guestMiddleware(req, res, next){
    if (req.session.userLogged){
        /* return res.redirect("/user/userDetail"); */
        return res.redirect("/");
    } 
    next();
}

/* module.exports = function guestMiddleware(req, res, next){
    if (req.session.userLogged == undefined){
        next();
    } else {
        res.send("Esta página es solo para invitados");
    }
} */