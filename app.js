import express from "express";
import csvRouter from "./src/csv_upload/csv.routes.js";
import path from "path";

const port = 4500;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), "public")));

app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));

app.use("/csv", csvRouter);

app.listen(port, (err) => {
  if (err) {
    console.log("Server Not Started: ", err);
  }
  console.log(`Server Listening On Port ${port}`);
});
