
module.exports = function editarProductoMiddleware(req, res, next){
    if (!req.session.userLogged){
        
        return res.redirect("/");
    } else {
        if(req.session.userLogged.category_id == 1){next();} else {return res.redirect("/");}
    }
    /* next(); */
}