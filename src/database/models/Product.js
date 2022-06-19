module.exports = (sequelize, DataTypes) => {
    let alias = 'Product';
    let columns = {
        id_products: {
            type: DataTypes.BIGINT(11).UNSIGNED,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        price: {
            type: DataTypes.BIGINT(10),
            allowNull: true
        },
        accesories: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        visible: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        car: {
            type: DataTypes.STRING,
            allowNull: false
        },

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
    const Product = sequelize.define(alias, columns, config);
    //Realaciones de la tabla
    Product.associate = (models) => {
        Product.belongsTo(models.Brand, {
            as: 'brands',
            foreignKey: 'id_brands'
        });
        Product.belongsTo(models.Category, {
            as: 'categories',
            foreignKey: 'id_categories'
        });
        Product.belongsToMany(models.Color, {
            as: 'colors',
            through: 'products_has_colors',
            foreignKey: 'id_products',
            otherKey: 'id_colors',
            timestamps: false
        });
    };

    return Product;
};
