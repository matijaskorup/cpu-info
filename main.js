"use strict";
const express = require("express");
const app = express();
const os = require("os");

let port = 8081;
let ip=""

let systemType = os.type();
let cpus = os.cpus().map(el => el).length;

app.get("/", (req, res) => {
  res.send(
    `<br> <br> <br> <h1>Ich laufe auf einem Rechner mit ${systemType} und ${cpus} ${
      cpus.length === 1 ? "CPU" : "CPU-s"
    }</h1>`
  );
});

console.log(
  `Ich laufe auf einem Rechner mit ${systemType} und ${cpus} ${
    cpus.length === 1 ? "CPU" : "CPU-s"
  } \n \n`
);

app.listen(port, () => {
  console.log("Server running on port: " + port);
});
