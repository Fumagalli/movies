import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./src/data-source";
import userRoutes from "./src/routes/user.routes";
import movieRoutes from "./src/routes/movie.routes";
import filterRoutes from "./src/routes/filter.routes";
import path from "path";

const app = express();
const port = 3000

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/movies", movieRoutes);
app.use("/filters", filterRoutes);
app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

AppDataSource.initialize().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}).catch((err) => {
  console.error("Database connection failed:", err);
});
