const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());


app.use(express.json());


app.get("/", (req, res) => {
  res.send("Server Working");
});


app.use("/api/contact", require("./routes/contactRoutes"));


mongoose.connect("mongodb+srv://admin:admin123@cluster0.5lemxto.mongodb.net/greenscape?retryWrites=true&w=majority")
.then(() => {
  console.log("MongoDB Connected");

  app.listen(process.env.PORT || 5001, () => {
  console.log("Server running");
});
})
.catch((err) => console.log(err));