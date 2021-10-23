
let db = require("../../database/models");



module.exports = {
    

    all: function(req, res) {
        db.Users
        .findAll({
            include: [{association: "categoria"}]
        })
        .then(function(users) {

             
            users = users.map((user, i) => {
                user = {
                id: user.id,
                user_name: user.user_name,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                //password: user.password,
                image: `http://localhost:3001/uploads/users/${user.image}`,
                detail: `http://localhost:3001/userApi/${user.id}`,
                categoria: user.categoria.title
            }
                return user
            })

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

            user ={
                "id": user.id,
                "user_name": user.user_name,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "email": user.email,
                "image": user.image
            }    

        return res.status(200).json({
            data: user,
            imageUrl: `http://localhost:3001/uploads/users/${user.image}`,
            status: 200
        })
    })
}

}