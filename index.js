const express = require("express");
const { json } = require("body-parser");

const app = express();
const PORT = 5050;

app.use(json());

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
