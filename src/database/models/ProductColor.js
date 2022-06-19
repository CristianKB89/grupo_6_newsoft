module.exports = (sequelize, DataTypes) => {
    let alias = 'products_has_colors';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        id_products: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_colors: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    };

    let config = {
        tableName: 'products_has_colors',
        timestamps: false
    }

    const ProductColor = sequelize.define(alias, cols, config);
    
    ProductColor.associate = (models) => {
    ProductColor.belongsTo(models.Product, {
        as: 'color_product',
        foreignKey: 'id_colors'
    }),
    ProductColor.belongsTo(models.Color, {
        as: 'product_color',
        foreignKey: 'id_products'
    });
    };


    return ProductColor;
};