import express from "express";

const app = express();
import { PORT } from "./config/serverConfig.js";
import userRoute from "./routes/User.js";

app.use(express.json());
app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log("server started");
});
