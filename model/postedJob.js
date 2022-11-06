const mongoose = require("mongoose");

const postedJobSchema = mongoose.Schema({
  jobInfoId: {
    type: ObjectId,
    required: true,
    ref: "JobInfo",
  },
  title: {
    type: String,
    required: [true, "Job title name must be required"],
  },
  postedBy: {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    id: {
      type: ObjectId,
      ref: "User",
    },
  },
  jobCategory: String,
  deadline: String,
  imgUrl: String,
  companyName: String,
  companyAddress: String,
  vacency: Number,
  requirePosition: String,
  isAvailable: {
    type: Boolean,
    default: "true",
  },
});
