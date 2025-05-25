import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./src/data-source";

const app = express();
const port = 3000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

AppDataSource.initialize().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
