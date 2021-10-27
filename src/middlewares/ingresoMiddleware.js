
module.exports = function ingresoMiddleware(req, res, next){
    if (!req.session.userLogged){

        return res.redirect("/");
        
    } else {
        next();
    }
    
}