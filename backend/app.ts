import "reflect-metadata";
import { Request, Response } from "express";
import express from "express";
import cors from "cors";
import path from "path";

import { AppDataSource } from "./src/data-source";
import userRoutes from "./src/routes/user.routes";
import movieRoutes from "./src/routes/movie.routes";
import filterRoutes from "./src/routes/filter.routes";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/movies", movieRoutes);
app.use("/filters", filterRoutes);
app.use("/uploads", express.static(path.resolve(__dirname, "uploads")));

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
