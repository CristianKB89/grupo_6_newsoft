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
        user_rol: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_address: {
            type: DataTypes.STRING,
            allowNull: false
        }

    };
    let config = {
        //PARAOIND = PARAOINDICAR QUE SE CREE LA TABLA CON LOS TIMESTAMPS
        timestamps : true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: false,
        //PARAOIND
        deletedAt: "deleted_at",
        paranoid: true,
    };
    const User = sequelize.define(alias, columns, config);
    //Realaciones de la tabla
    User.associate = (models) => {
        
    };
    return User;
}