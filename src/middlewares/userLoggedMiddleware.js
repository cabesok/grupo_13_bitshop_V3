
module.exports = function userLoggedMiddleware(req, res, next){
    
    res.locals.isLogged = false;
/* console.log(res.locals.isLogged + "1") */
    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;

        /* console.log(res.locals.isLogged + "2") */
    }

    next();
}

