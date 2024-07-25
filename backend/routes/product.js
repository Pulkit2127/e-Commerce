const express = require("express");
const { Product, Review } = require("../db");
const { authMiddleware } = require("../middleware");

const productRouter = express.Router();

// productRouter.post("/bulk");
productRouter.get("/bulk", async (req, res) => {
  const products = await Product.find({});
  res.json({
    products,
  });
});

productRouter.get("/deals", async (req, res) => {
  const products = await Product.find({
    sale: true,
  });

  res.json({
    products,
  });
});

// .../product/:id/reviews
productRouter.get("/:productid/reviews", async (req, res) => {
  const productid = req.params.productid;
  const reviews = await Review.find({
    productid,
  });
  res.json({
    reviews,
  });
});

// .../product/bulk
productRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOne({
    _id: id,
  });

  if (product) {
    return res.json({
      product,
    });
  }

  res.status(411).json({
    message: "product Not Found aur Ma aur Chuda",
  });
});

module.exports = productRouter;
