const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config()

const teacherRouter = require("./routes/api/teacher");
const authRouter = require("./routes/api/auth");
const subjectRouter = require("./routes/api/subject");

const app = express();


const formatsLogger = app.get("env") === "development" ? "dev" : "short";


app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/teacher", teacherRouter);
app.use("api/subject", subjectRouter)

app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
    if (err.status !== 500) {
    res.status(err.status).json({ message: err.message })
}
    res.status(500).json({ message: err.message });
});

module.exports = app;