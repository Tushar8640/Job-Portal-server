const User = require("../../model/user");
const bcrypt = require("bcrypt");
const { generateToken } = require("../../utils/generateToken");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        status: "fail",
        error: "Please provide your credentials",
      });
    }

    const user = await User.findOne({ email });

    // select("-password");

    if (!user) {
      return res.status(401).json({
        status: "fail",
        error: "No user found Or Invalid password.",
      });
    }
    console.log(user);
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(403).json({
        status: "fail",
        error: "Password Or Email is not correct",
      });
    }
    const { password: pwd, ...others } = user.toObject();
    const token = generateToken(user);

    res.status(200).json({
      status: "success",
      message: "Successfully logged in",
      data: {
        user: others,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

module.exports = loginUser;
