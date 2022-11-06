const bcrypt = require('bcrypt');


module.exports = getAuth = async (req,res,next) => {

    try {
        const {email ,password:reqPassword} = req.body

        next()
    } catch (error) {
        console.log(error);
    }
};
