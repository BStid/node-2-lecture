const express = require("express");
const { json } = require("body-parser");

const app = express();

app.use(json());

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
