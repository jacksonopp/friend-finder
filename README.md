# Friend-Finder

###### Written in node.js by Jackson Oppenheim

https://friend-finder-jacksonopp.herokuapp.com/

---

### What is Friend-Finder?

Friend-Finder web-app where you answer a series of questions, then an algorithm will take your answers and calculate who is your will be your next best friend!

### NPM Dependencies

-  axios 0.19.0
-  express 4.17.1
-  express-handlebars 3.1.0
-  nodemon 1.19.2 (for testing and development purposes)

### Database

The database is stored in a local js object on the express server, and accessed through a RESTful API.

### Organization

```
project
│   README.md
│   package.json
│   server.js - this our express server
│
└───routing
    │   apiRoutes.js - this contains all of the routing information for API requests
    │   htmlRoutes.js - this contains all of the routing information for HTML requests

└───app
    └───data
        |   friends.js - this is where the list of friends is stored and updated as POST requests come in

    └───public
        |   calculate.js - this contains the logic for calculating the best match
        |   survey.js - this contains the logic for taking in the survey results and POSTing them to the RESTful API.

└───views
    └───layouts
        |   main.handlebars - this is the main handlebars layout page

    │   index.handlebars - this contains the welcome page
    |   survey.handlebars - this contains the markup for the survey

```
