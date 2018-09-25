
var tacoController = require("./../controllers/tacoController.js");

var appRouter = function (app) {
  app.get("/tacoservice", function(req, res) {
    price= tacoController.getQuote(req.query.name, req.query.age, req.query.gender, req.query.condition);
    res.status(200).send(price);
  });
}

module.exports = appRouter;

