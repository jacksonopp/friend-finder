// importing npm modules
const express = require("express");
const exphbs = require("express-handlebars");

//importing routes
const apiRoutes = require("./routing/apiRoutes");
const htmlRoutes = require("./routing/htmlRoutes");

//creating the express app
const app = express();

//setting the port
const PORT = process.env.PORT || 8080;

app.use(express.static('app'));
app.use(express.json());

//setting up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.use(apiRoutes);
app.use(htmlRoutes);
app.use(apiRoutes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
