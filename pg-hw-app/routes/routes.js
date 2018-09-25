
var tacoController = require("./../controllers/tacoController.js");

var appRouter = function (app) {
  app.get("/tacoservice", function(req, res) {

    if(req.query.name && req.query.age && req.query.gender && req.query.condition){
      price = tacoController.getQuote(req.query.name, req.query.age, req.query.gender, req.query.condition);
    } else {
      res.status(500).send("ERROR");
    }
    res.status(200).send(price);
  });
}

module.exports = appRouter;

