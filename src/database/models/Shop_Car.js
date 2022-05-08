module.exports = (sequelize, DataTypes) => {
    let alias = 'Shop_Car';
    let columns = {
        id_shopping_car: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        payment_method: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
     };
    let config = {
        timestamps : false,
    };
    const Shop_Car = sequelize.define(alias, columns, config);
    //Realaciones de la tabla
    Shop_Car.associate = (models) => {
        
    };
    return Shop_Car;
};