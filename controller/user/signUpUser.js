const User = require("../../model/user");
const bcrypt = require("bcrypt");

const signUpUser = async (req, res) => {
  try {
    console.log(req.body);
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(401).json({
        status: "fail",
        error: "User Already exists",
      });
    }
    const result = await User.create(req.body);

    res.status(200).json({
      status: "success",
      message: "Sign up successfully",
      data: {
        user: result,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

module.exports = signUpUser;
