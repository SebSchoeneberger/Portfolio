import express from "express";
import cors from "cors";
import contactRouter from "./routes/contactRoute.js";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: "https://sebastianschoeneberger.com",
    methods: "POST",
    allowedHeaders: "Content-Type"
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, Sebastian!');
    });

app.use("/api", contactRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
