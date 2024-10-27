const express = require("express");
const mongoose = require('mongoose');
const route = require("./routes/route");
const app = express();
app.use(express.json());

require("dotenv").config();

// mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.URL, { useNewUrlParser: true })
  .then(() => console.log("MongoDb is connected"))                 
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT, () => {
  console.log("App is running at port " + process.env.PORT);
});













// mongoose.set("strictQuery", false);

// app.use("/", route);

// app.listen(process.env.PORT, function () {
//   console.log("Express app running on PORT : " + process.env.PORT);
// });









// const express = require("express");
// const route = require("./routes/route");
// const { default: mongoose } = require("mongoose");
// const app = express();
// require("dotenv").config();

// app.use(express.json());

// mongoose.set("strictQuery", false);

// mongoose
//   .connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true }) 
//   .then(() => console.log("MongoDb is connected"))
//   .catch((err) => console.log(err));

// app.use("/", route);

// app.listen(process.env.PORT, function () {
//   console.log("Express app running on port " + process.env.PORT);
// });
