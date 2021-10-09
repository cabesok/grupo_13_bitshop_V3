module.exports=(sequelize, dataTypes) => {

    let alias = "Users";
    let cols = {
id:{
    type: dataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
} ,
user_name: {
    type: dataTypes.STRING,
    allowNull: false,
},
first_name: {
    type: dataTypes.STRING,
    allowNull: false,
},
last_name: {
    type: dataTypes.STRING,
    allowNull: false,
},
email: {
    type:dataTypes.STRING,
    allowNull: false,
},
password: {
    type:dataTypes.STRING,
    allowNull: false,
},
image: {
    type:dataTypes.STRING
}

    }
    let config = {
        tableName: "users",
        timestamps:false
    }

    const User = sequelize.define(alias, cols, config);

    /* User.associate = function(models) {
        User.belongsTo(models.Userscategories , {
            as: "categoria",
            foreignKey: "category_id"
        })
    } */
return User;
}
