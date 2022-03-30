//-----------router-------------------------//
//const express = require("express");
//const router = express.Router();
// load model
//const Post = require("../models/post");
// route add posts
// router.get("/add", (req, res) => {
//   res.render("posts/add");
// });
// xử lý form add
// router.post("/", async (req, res) => {
//   // console.log(req.body);
//   const { title, text } = req.body;
//   let errors = [];
//   if (!title) errors.push({ msg: "không được trống" });
//   if (!text) errors.push({ msg: "không được trống" });
//   if (errors.length > 0) res.render("posts/add", { errors, title, text });
//   else {
//     //in vào trong csdl
//     const newPostData = { title, text };
//     const newPost = new Post(newPostData);
//     await newPost.save();
//     res.redirect("/posts");
//   }
// });
// hiển thị bài viết
// router.get("/", async (req, res) => {
//   const posts = await Post.find().lean.sort({ date: -1 });
//   res.render("posts/index", posts);
// });

//form sửa bài viết
// router.get("/edit/:id", async (req, res) => {
//   const post = await Post.findOne({ _id: req.params.id });
//   res.render("posts/edit", { post });
// });
//cập nhật
// router.put("/:id", async (req, res) => {
//   const { title, text } = req.body;
//   await Post.findOneAndUpdate({ _id: req.params.id }),
//     { title: title, text: text };
//   res.redirect("/posts");
// });
//xóa
// router.delete("/:id", async (req, res) => {
//   await Post.findOneAndRemove({ _id: req.params.id });
//   req.res.redirect("/posts");
// });
//module.exports = router;
