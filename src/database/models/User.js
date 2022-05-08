module.exports = (sequelize, DataTypes) => {
    let alias = 'User';
    let columns = {
        id_users: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING.BINARY,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        newsletter: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        id_shopping_cart: {
            type: DataTypes.BIGINT.UNSIGNED,
            ForengKey: true
        }
    };
    let config = {
        timestamps : false,
    };
    const User = sequelize.define(alias, columns, config);
    //Realaciones de la tabla
    User.associate = (models) => {
        
    };
    return User;
}