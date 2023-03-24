const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;
const tours = JSON.parse(
	fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.use(express.json());

app.get("/api/v1/tours", (req, res) => {
	res.status(200).json({
		status: "success",
		reesults: tours.length,
		data: {
			tours: tours,
		},
	});
});

app.post("/api/v1/tours", (req, res) => {
    console.log(req.body);
    res.send("Done");
});

app.listen(port, () => {
	console.log("App running on port ${port}...");
});
