const express = require("express");

const Posts = require("../models/posts");

const router = express.Router();

//save posts

router.post("/post/save", (req, res) => {
  let newPost = Posts(req.body);

  newPost.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "posts saved successfully",
    });
  });
});

// get posts

router.get("/posts", (req, res) => {
  Posts.find().exec((err, posts) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      exixtingPosts: posts,
    });
  });
});

// update Posts

router.put("/post/update/:id", (req, res) => {
  Posts.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, post) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: "updated succesfully",
      });
    }
  );
});

// delete posts
router.delete("/post/delete/:id", (req, res) => {
  Posts.findByIdAndRemove(req.params.id).exec((err, deletedPost) => {
    if (err)
      return res.status(400).json({
        message: "Delete succesful",
        err,
      });
    return res.json({
      message: "Delete Succesful",
      deletedPost,
    });
  });
});

module.exports = router;
