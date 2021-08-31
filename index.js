const express = require("express");
require("./rhubarb-server");
const app = express();

app.enable("trust proxy");
app.set("trust proxy", 1);
app.use(express.static("public"));

app.all("/", (req, res) => res.sendFile(__dirname + "/public/index.html"));

app.listen(3000, () => console.log("listening on port " + 3000));
