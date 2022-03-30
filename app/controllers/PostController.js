//-----------controller------------//

//import model
const Post = require("../../models/post");
class PostController {
  // hàm
  async list(req, res, next) {
    const posts = await Post.find().lean();
    res.render("posts/index", { posts: posts });
  }
  add(req, res, next) {
    res.render("posts/add");
  }
  //lưu khi add
  async store(req, res, next) {
    const datapost = req.body;
    const newPost = new Post(datapost);
 
    await newPost.save();
    // req.flash("error", "This is an error!");
    // const messages = await req.consumeFlash("info");

  //  Error: req.flash() requires sessions
    res.redirect("/posts");

    // res.json(req.body);
  }
  //edit
  async edit(req, res, next) {
    const postsEdit = await Post.findById({ _id: req.params.id }).lean();
    res.render("posts/edit", { postsEdit: postsEdit });
  }
  //update
  async update(req, res, next) {
    // res.json(req.body);

    // postsUpdate = await Post.updateOne({ _id: req.params.id });
    // res.redirect("/posts/update", req.body);
    Post.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/posts/list"))
      .catch(next);
  }
  //xóa
  async delete(req, res, next) {
    // await Post.findOneAndRemove({ _id: req.params.id });
    // res.render("posts");
    Post.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("/posts/list"))
      .catch(next);
  }
}

module.exports = new PostController();
