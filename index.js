require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");

const app = express();
const PORT = 5050;

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  console.log("Database connected");
  //   dbInstance.seed_data();
  app.set("db", dbInstance);
});
app.use(json());

app.get("/api/students", (req, res) => {
  const db = req.app.get("db");
  if (req.query.hometown && req.query.name) {
    db.getStudentsWithHometown([req.query.hometown, req.query.name]).then(
      result => {
        res.json(result);
      }
    );
  } else {
    db.getStudents()
      .then(results => {
        res.status(200).json(results);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send("There was an error");
      });
  }
});

app.post();

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
