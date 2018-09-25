
var tacoController = require("./../controllers/tacoController.js");

var appRouter = function (app) {
  app.get("/", function(req, res) {
    
    price= tacoController.sayHelloInEnglish();

    res.status(200).send("Welcome to our restful API" + price);
  });
}

module.exports = appRouter;
