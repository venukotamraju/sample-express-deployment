const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.get("/helloWorld", (req, res) => {
  res.json("hello world");
});
app.listen(port, () => console.log("listening on port ", port));
