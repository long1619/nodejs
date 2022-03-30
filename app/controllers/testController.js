//-----------controller------------//
class testController {
  // hàm
  // indextest(res, req) {
  //   res.render("about");
  // }
  indextest(req, res, next) {
    res.render("about");
  }
}

module.exports = new testController();
