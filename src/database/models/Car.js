module.exports = (sequelize, DataTypes) => {
    let alias = 'Car';
    let columns = {
        id_products_car: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        status_car: {
            type: DataTypes.STRING,
            allowNull: true
        },
        id_products: {
            type: DataTypes.BIGINT.UNSIGNED,
            ForengKey: true
        },
        id_users: {
            type: DataTypes.BIGINT.UNSIGNED,
            ForengKey: true
        },
        total_car: {
            type: DataTypes.INTEGER,
            allowNull: true
        }

    };
    let config = {
        
        timestamps : false,
    };
    const Car = sequelize.define(alias, columns, config);
    //Realaciones de la tabla
    Car.associate = (models) => {

    };
    return Car;
}
        