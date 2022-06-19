module.exports = (sequelize, DataTypes) => {
    let alias = 'Category';
    let columns = {
        id_categories: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: true,
            primaryKey: true
        },
        categories: {
            type: DataTypes.STRING,
            allowNull: true
        }
    };
    let config = {
        timestamps : false,
    };
    const Category = sequelize.define(alias, columns, config);
    //Realaciones de la tabla
    Category.associate = (models) => {
        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'id_categories'
        });
    };
    return Category;
};