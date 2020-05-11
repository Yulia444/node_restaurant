
module.exports = (sequelize, type) => {
    return sequelize.define("reviews", {
    id: {
        type: type.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    author: type.STRING(16),
    title: type.STRING(72),
    review: type.TEXT,
    date: type.DATE
    
});
}