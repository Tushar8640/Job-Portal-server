const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const port = 5000;

// connect with mongoose database


// database uri mongodb+srv://<username>:<password>@cluster0.pem0irl.mongodb.net/test
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pem0irl.mongodb.net/?retryWrites=true&w=majority`;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pem0irl.mongodb.net/jobportal`


// database connection
mongoose.connect(uri).then(() => {
  console.log(`Database connection is successful  🛢`);
}).catch((err)=>console.log(err));


// listen server
app.listen(port, () => {
  console.log(`server is running on port:::${port}`);
});
