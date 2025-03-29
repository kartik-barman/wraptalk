import express from "express";
const app = express();
import cors from "cors";
import translateRouter from "./routes/translate.router.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

console.log(process.env.CORS_ORIGIN)
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }));


app.get("/", (req, res) => {
  res.send("Hello from the backendcli server!");
});
app.use("/translate", translateRouter);
app.use(globalErrorHandler);

export { app };