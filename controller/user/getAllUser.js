const JobInfo = require("../../model/jobInfo");

const getAllJobInfo = async (req, res) => {
  try {
    console.log("get all user");
    const jobInfo = await User.find();
    // console.log("user");
    if (!jobInfo) {
      return res.status(401).json({
        status: "fail",
        error: "No jobInfo found.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Successfully get jobinfo datas",
      data: {
        jobInfo,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

module.exports = getAllJobInfo;
