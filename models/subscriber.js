
module.exports = (sequelize, type) => {
    return sequelize.define("subscribers", {
    id: {
        type: type.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    email: type.STRING(36)
    
});
}