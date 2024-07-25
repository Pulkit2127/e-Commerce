const express = require("express");
const { Review } = require("../db");
const { authMiddleware } = require("../middleware");

const reviewRouter = express.Router();

reviewRouter.post("/add/:productid", authMiddleware, async (req, res) => {
  const userid = req.userid;
  const productid = req.params.productid;

  const { description, rating } = req.body; // description, rating
  try {
    const review = await Review.create({
      userid,
      productid,
      description,
      rating,
    });

    res.json({
      message: "Review Submitted successfully",
      review,
    });
  } catch (error) {
    res.status(411).json({
      message: "Kuch dikkat hai bhai",
    });
  }
});

reviewRouter.put("/evm", authMiddleware, async (req, res) => {
  const { upvote, reviewid } = req.body; // {upvote: true}
  var upvotes = 0;
  var downvotes = 0;
  if (upvote) {
    upvotes = 1; //downvotes=0
  } else {
    downvotes = 1; //upvotes=0
  }
  try {
    await Review.updateOne(
      {
        _id: reviewid,
      },
      { $inc: { upvotes: upvotes, downvotes: downvotes } }
    );

    res.json({
      message: "voted successfully",
    });
  } catch (error) {
    res.status(411).json({
      message: "kuch dikkt aagyi",
    });
  }
}); //user2

module.exports = reviewRouter;
