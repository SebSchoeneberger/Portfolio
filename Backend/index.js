import express from "express";
import cors from "cors";
import contactRouter from "./routes/contactRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', cors(), (req, res) => {
    res.send('Hello, Sebastian!');
});

app.use("/api", cors({
    origin: "https://sebastianschoeneberger.com",
    methods: ["POST"],
    allowedHeaders: ["Content-Type"]
}), contactRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
