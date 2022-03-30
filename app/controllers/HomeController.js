//-----------controller------------//
//import model
const Post = require("../../models/post");
class HomeController {
  // hàm
  index(req, res, next) {
    res.render("index");
    // Post.find({}, function (err, post) {
    //   if (!err) {
    //     res.json(post);
    //   } else {
    //     res.status(400).json({ error: "error" });
    //   }
    // });
  }
}

module.exports = new HomeController();
