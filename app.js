const express = require('express');
const hbs = require("hbs");

const app = express();

app.use(express.static('public')); // Make everything inside of public/ available

app.set("views", __dirname + "/views"); //tells our Express app where to look for our views
app.set("view engine", "hbs"); //sets HBS as the template engine

hbs.registerPartials(__dirname + "/views/partials")

// app.get(path, code);
// app.get(path, (req, res, next) => {});

// GET /
app.get("/", (req, res, next) => {
    res.render("home-page");
});

// GET /contact
app.get("/contact", (req, res, next) => {
    res.render("contact-page");
});

app.get("/pizzas/margarita", (req, res, send) => {

    const dataMargarita = {
        title: 'Pizza Margarita',
        price: 12,
        recommendedDrink: 'beer',
        ingredients: ['mozzarella', 'tomato sauce', 'basilicum'],
        imageFile: "pizza-margarita-img.jpg",
        imageAlt: "pizza-img",
      };


    res.render("product", dataMargarita);
});

app.get("/pizzas/veggie", (req, res, next) => {

    const dataVeggie = {
        title: 'Veggie Pizza',
        price: 15,
        recommendedDrink: 'power smoothie',
        ingredients: ['cherry tomatoes', 'basilicum', 'Olives'],
        imageFile: "pizza-veggie-img.jpg",
        imageAlt: "pizza-img",
      };

    res.render("product", dataVeggie);
});

app.get("/pizzas/seafood", (req, res, next) => {

    const dataSeafood = {
        title: 'Seafood Pizza',
        price: '',
        recommendedDrink: 'white wine',
        ingredients: ['tomato sauce', 'garlic', 'prawn'],
        imageFile: "pizza-seafood-img.jpg",
        imageAlt: "pizza-img",
      };

    res.render("product", dataSeafood);
});


app.listen(3000, () => { console.log("server listening on port 3000...")});