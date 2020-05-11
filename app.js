var bodyParser = require('body-parser');
var express = require('express');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var app = express();
app.set('view engine', 'ejs');
app.use('/views', express.static('views'))

const {Image, Dish, Review, Subscriber} = require('./index');

var navies = ['gallery', 'menu', 'news', 'reviews'];



app.get('/', function(req, res) {
    res.render('main', {
        page: req.url,
        navies: navies
    });
});

app.post('/', urlencodedParser, async(req, res)=> {
    // await client.query(`INSERT INTO subscribers (email) VALUES('${req.body.email}')`);
    await Subscriber.create({email: req.body.email});
    res.render('main', {
        page: req.url,
        navies: navies
    });
});

app.post('/gallery', urlencodedParser, async(req, res)=> {
    // await client.query(`INSERT INTO subscribers (email) VALUES('${req.body.email}')`);
    await Subscriber.create({email: req.body.email})
    var images = await Image.findAll({raw: true})
    
    console.log(images)
    res.render('gallery', {
        page: req.url,
        navies: navies,
        images: images
    });
});

app.get('/gallery', async (req, res) => {
    var images = await Image.findAll({raw: true})
    res.render('gallery', {
        page: req.url,
        navies: navies,
        images: images
    });

});

app.get('/menu', async (req, res) => {
    var categories = await Dish.aggregate('dish_type', 'DISTINCT', {raw: true, plain: false})
    var dishes = await Dish.findAll({attributes: ['picture', 'description', 'price']})
    res.render('menu', {
        page: req.url,
        navies: navies,
        categories: categories,
        dishes: dishes
    });
});

app.get('/menu/:category', async (req, res) => {
    var categories = await Dish.aggregate('dish_type', 'DISTINCT', {raw: true, plain: false})
    var dishes = await Dish.findAll({attributes: ['picture', 'description', 'price'], where: 
    {'dish_type': req.params.category}})
    res.render('menu', {
        page: req.url,
        navies: navies,
        categories: categories,
        dishes: dishes
    });
});

app.get('/news', function(req, res) {
    res.send('This is news');
})

app.get('/reviews', async(req, res) => {
    var reviews = await client.query("SELECT author, title, review, date FROM reviews ORDER BY id DESC")
    var reviews = await Review.findAll({attributes: ['author', 'title', 'review', 'date'], 
    order: ['id', 'DESC']
})
    res.render('reviews', {
        page: req.url,
        navies: navies,
        reviews: reviews.rows
    });
});

module.exports.Image = Image;
module.exports.Dish = Dish;
module.exports.Review = Review;
module.exports.Subscriber = Subscriber;
app.listen(process.env.PORT || 3000);