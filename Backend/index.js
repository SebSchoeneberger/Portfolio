import express from "express";
import cors from "cors";
import contactRouter from "./routes/contactRoute.js";
import cvRouter from "./routes/cvRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', cors(), (req, res) => {
    res.send('Hello, Sebastian!');
});

app.get("/keepalive", cors(), (req, res) => {
    res.status(200).send("OK");
  });
  
  const apiCors = cors({
    origin: "https://sebastianschoeneberger.com",
    methods: ["POST"],
    allowedHeaders: ["Content-Type"]
  });
  
  // Routers under /api
  app.use("/api", apiCors, contactRouter);
  app.use("/api", apiCors, cvRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
