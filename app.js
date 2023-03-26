const { Router } = require("express");
const express = require("express");
const morgan = require("morgan");

const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan("dev"));

app.use((req, res, next) => {
	req.requestTime = new Date().toISOString();
	next();
});

app.use((req, res, next) => {
	console.log("Hello from the middleware");
	next();
});

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

app.listen(port, () => {
	console.log("App running on port ${port}...");
});
