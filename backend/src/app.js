const express = require("express");
const app = express();
const aiRoutes = require("./routes/ai.routes");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is running");
})

app.use("/ai", aiRoutes);



















module.exports = app;
