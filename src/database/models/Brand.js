module.exports = (sequelize, DataTypes) => {
    let alias = 'Brand';
    let columns = {
        id_brands: {
            type: DataTypes.BIGINT(11).UNSIGNED,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        brand : {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    };
    let config = {
        timestamps : false,
    };
    const Brand = sequelize.define(alias, columns, config);
    //Realaciones de la tabla
    Brand.associate = (models) => {
        Brand.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'id_brands'
        });
    };
    return Brand;
};