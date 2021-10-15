
let db = require("../../database/models");

module.exports = {
    

    all: function(req, res) {
        db.Users
        .findAll()
        .then(function(user) {
        return res.status(200).json({
            total: user.length,
            data: user,
            status: 200
        })
    })
}

}