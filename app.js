const express = require("express");
const cors = require("cors");
const User = require("./model/user");
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// app.post("/user", async (req, res) => {
//   try {
//     const data = req.body;
//     const user = await User.create(data);

//     res.status(200).send({
//       status: "success",
//       message: "user successfully created",
//       data: user,
//     });
//   } catch (error) {
//     console.log(error);
//     res.send({
//       success: "fail",
//       error: error.message,
//     });
//   }
// });

// routes
const  userRouter  = require("./routes/user");

app.use("/api/v1/user", userRouter);

app.get("/", (req, res) => {
  res.send("<h1>Your server is connected</h1>");
});
module.exports = app;
