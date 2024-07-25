const express = require("express");
const userRouter = require("./user");
const productRouter = require("./product");
const reviewRouter = require("./review");

const mainRouter = express.Router();

mainRouter.use("/user", userRouter);
mainRouter.use("/product", productRouter);
mainRouter.use("/review", reviewRouter);

module.exports = mainRouter;
