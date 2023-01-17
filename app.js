const fs = require('fs');
const express = require("express");
const app = express();

let users = JSON.parse(fs.readFileSync('users.json'));
let helper = {users: users};

app.set("view engine", "handlebars");

app.get('/users', (req,res) => {
    res.render("contact.hbs", helper);
});

app.listen(8080);