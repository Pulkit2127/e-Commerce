const express = require("express");
const jwt = require("jsonwebtoken");
const { User, Product } = require("../db");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");

const userRouter = express.Router();

// .../user/signup
userRouter.post("/signup", async (req, res) => {
  const body = req.body;

  const existingUser = await User.findOne({
    username: body.username,
  });

  if (existingUser) {
    res.status(403).json({
      message: "BKL kitne acc. bnayega",
    });
    return;
  }

  const user = await User.create(body);

  const token = jwt.sign({ userId: user._id }, JWT_SECRET);

  res.json({
    message: "User Created",
    token,
  });
});

// .../user/signin
userRouter.post("/signin", async (req, res) => {
  const body = req.body;

  const existingUser = await User.findOne({
    username: body.username,
    password: body.password,
  });

  if (existingUser) {
    const token = jwt.sign({ userId: existingUser._id }, JWT_SECRET);

    res.json({
      message: "Login Successfull",
      token,
    });
    return;
  }

  res.status(403).json({
    message: "Ma chuda bhosdk",
  });
});

// .../user/cart
userRouter.get("/cart", authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findOne({ _id: new ObjectId(userId) });

    if (user) {
      const cartProductIds = user.cartProducts || [];

      const cartProducts = await Product.find({
        _id: { $in: cartProductIds.map((id) => new ObjectId(id)) },
      }).toArray();

      res.json(cartProducts);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching cart products" });
  }
});

userRouter.get("/me", authMiddleware, (req, res) => {
  const userId = req.userId;
  res.json({
    userId,
  });
});

module.exports = userRouter;
