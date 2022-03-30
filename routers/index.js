// route cha//
const Routepost = require("./post"); // gọi router test
const Routehome = require("./home"); // gọi router home
function route(app) {
  app.use("/posts", Routepost);
  app.use("/", Routehome);
}

module.exports = route;
