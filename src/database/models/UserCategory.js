module.exports=(sequelize, dataTypes) => {

    let alias = "Userscategories";
    let cols = {
id:{
    type: dataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
} ,
title: {
    type: dataTypes.STRING,
    allowNull: false
},


    }
    let config = {
        tableName: "user_category",
        timestamps:false
    }

    const UserCategory = sequelize.define(alias, cols, config);

    UserCategory.associate = function(models) {
        UserCategory.hasMany(models.Users, {
            as: "usuarios",
            foreignKey: "category_id"
        })}

return UserCategory;
}
