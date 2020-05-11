

module.exports = (sequelize, type) => {
    return sequelize.define("images", {
    id: {
        type: type.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    link: type.STRING(48),
    
});
}
