const express = require("express");
// require("./rhubarb-server");
const path = require("path");

var multer = require("multer");

const upload = multer({ dest: "./uploads/" });

const app = express();

app.enable("trust proxy");
app.set("trust proxy", 1);
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "build")));
app.use(express.static(path.join(__dirname, "uploads")));

// app.all("/", (req, res) => res.sendFile(__dirname + "/public/index.html"));
app.get("/", (req, res) => {
	console.log("home route hit");
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post(
	"/uploadSprite",
	upload.array("sprites", 2),
	function (req, res, next) {
		console.log(req.files);
		console.log(`uploaded ${req.files.length} files`);
		// req.files is array of `photos` files
		// req.body will contain the text fields, if there were any
		res.send("ok");
	}
);

app.listen(3003, () => console.log("listening on port " + 3003));
