module.exports = (sequelize, DataTypes) => {
    let alias = 'Color';
    let columns = {
        id_colors: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        colors: {
            type: DataTypes.STRING,
            allowNull: true
        }
    };
    let config = {
        timestamps : false,
    };
    const Color = sequelize.define(alias, columns, config);
    //Realaciones de la tabla
    Color.associate = (models) => {
        Color.belongsToMany(models.Product, {
            as: 'products',
            through: 'products_has_colors',
            foreignKey: 'id_colors',
            otherKey: 'id_products',
            timestamps: false
        });
    }
    return Color;
};