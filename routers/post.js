//---- router con---//
const express = require("express");
const router = express.Router();
const postController = require("../app/controllers/PostController");

router.get("/add", postController.add);
router.post("/store", postController.store);
router.get("/list", postController.list);
router.get("/edit/:id", postController.edit);
router.put("/update/:id", postController.update);
router.delete("/delete/:id", postController.delete);

module.exports = router;
