const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const jobInfoSchema = mongoose.Schema(
  {
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
    jobDescription: String,
    deadline: String,
    imgUrl: String,
    companyName: String,
    companyAddress: String,
    vacency: Number,
    jobRequirement: String,
    requirePosition: String,
    isActive: {
      type: String,
      default: "inactive",
    },
  },
  {
    timestamps: true,
  }
);

const JobInfo = mongoose.model("JobInfo", jobInfoSchema);

module.exports = JobInfo;
