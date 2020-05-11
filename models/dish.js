
module.exports = (sequelize, type) =>{
    return sequelize.define("dishes", {
    id: {
        type: type.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    picture: type.STRING(48),
    description: type.TEXT,
    price: type.INTEGER,
    dish_type: type.ENUM({
        values: ['appetizers', 'salads', 'pasta & rissoto', 'seafood', 'from the grill',
    'main dishes', 'desserts']
    })
});
}