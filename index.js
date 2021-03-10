const express = require("express");

const app = express();

const PORT = 5000;

app.use("/", (req, res) => {
  res.status(200).send("hellow world node server");
});

app.listen(PORT, () => {
  console.log(`server open ${PORT}`);
});
