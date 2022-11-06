const User = require("../../model/user");
const bcrypt = require("bcrypt");

const getLoggedInUser = async (req, res) => {
  try {

    // const user = await User.findOne({ email });

    // if (user) {
    //   return res.status(401).json({
    //     status: "fail",
    //     error: "User Already exists",
    //   });
    // }

    res.status(200).json({
      status: "success",
      message: "Sign up successfully",
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

module.exports = getLoggedInUser;
