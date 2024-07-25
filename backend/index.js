const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

// http://localhost:3001/
app.use("/", mainRouter);

app.listen(3001, () => {
  console.log("App is listening on PORT 3001");
});
