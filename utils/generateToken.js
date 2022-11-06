const jwt = require("jsonwebtoken");

exports.generateToken = (userInfo) => {
  const payload = {
    email: userInfo.email,
    role: "user",
  };
  const token = jwt.sign(payload, process.env.TOKEN_SECREAT, {
    expiresIn: "200s",
  });
  return token;
};
