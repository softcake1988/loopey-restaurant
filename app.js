const express = require('express');
const app = express();

app.use(express.static('public')); // Make everything inside of public/ available


// app.get(path, code);
// app.get(path, (req, res, next) => {});

// GET /
app.get("/", (req, res, next) => {
    console.log("we have received a request for the HOMEPAGE");
    
    res.sendFile(__dirname + "/views/home-page.html");
});

// GET /contact
app.get("/contact", (req, res, next) => {
    res.sendFile(__dirname + "/views/contact-page.html");
});

app.listen(3000, () => { console.log("server listening on port 3000...")});