
var appRouter = function (app) {
  app.get("/", function(req, res) {

    var price = buildPrice();

    res.status(200).send("Welcome to our restful API" + price);
  });
}

function buildPrice(){
  return 1;
}
  




module.exports = appRouter;
