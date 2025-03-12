import express from "express";
import cors from "cors";
import contactRouter from "./routes/contactRoute";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({origin:"*"}));
app.use(express.json());

app.use("/api", contactRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
