const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "user name must be required"],
      unique: [true, "User Already Exists please choose another name"],
    },
    email: {
      type: String,
      required: [true, "email must be needed"],
      unique: [true, "Account already exists"],
      lowercase: [true, "email should be in lowercase"],
    },
    password: {
      type: String,
      required: [true, "Password must ne neeeded"],
    },
    role: {
      type: String,
      enums: ["Md", "Applicant", "Admin"],
      default: "Md",
      required: [true,"User role must be needed"],
    },
    cvLink: String,
    Profession: String,
    imgLink: String,
    mobileNo: String,
    address: String,
    organizationDetails: String,
    organizationAddress: String,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    //  only run if password is modified, otherwise it will change every time we save the user!
    return next();
  }
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const password = this.password;

  const hashedPassword = bcrypt.hashSync(password, salt);

  this.password = hashedPassword;
  next();
});

// userSchema.methods.comparePassword = function (password, hash) {

// };

const User = mongoose.model("User", userSchema);
module.exports = User;
