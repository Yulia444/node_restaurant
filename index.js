const Sequelize = require('sequelize')
const ImageModel = require('./models/image')
const DishModel = require('./models/dish')
const ReviewModel = require('./models/review')
const SubscriberModel = require("./models/subscriber")

const sequelize = new Sequelize('restauran', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',

  });

const Image = ImageModel(sequelize, Sequelize);
const Dish = DishModel(sequelize, Sequelize);
const Review = ReviewModel(sequelize, Sequelize);
const Subscriber = SubscriberModel(sequelize, Sequelize);



module.exports = {
    Image, Dish, Review, Subscriber
}

