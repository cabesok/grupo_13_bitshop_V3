
let db = require("../../database/models");

module.exports = {
    

    all: async function(req, res) {
        db.Users
        .findAll()
        .then(function(users) {

             /* users.map((user, i) => {
                delete user[i].password;
                user[i].detail = 'http://localhost:3001/userApi/${user[i].id}';

                return user

            }) */

        return res.status(200).json({
            total: users.length,
            data: users,
            status: 200
        })
    })
},
    detail: function(req, res) {
        db.Users
        .findByPk(req.params.id)
        .then(function(user) {

            /* delete user.password; */

        return res.status(200).json({
            data: user,
            imageUrl: 'http://localhost:3001/public/uploads/users/${data.image}',
            status: 200
        })
    })
}

}