const User = require("../../model/user");

const getAllUser = async (req, res) => {
  try {
    console.log("get all user");
    const users = await User.find().select("-password");
    console.log(users, "user");
    if (!users) {
      return res.status(401).json({
        status: "fail",
        error: "No user found.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Successfully logged in",
      data: {
        users,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

module.exports = getAllUser;
