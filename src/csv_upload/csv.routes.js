import express from "express";
import CsvController from "./csv.controller.js";

const csvRouter = express.Router();

const csvController = new CsvController();

csvRouter.get("/all", csvController.showAllFiles);
csvRouter.post("/upload", csvController.uploadFile);
csvRouter.get("/single/:id", csvController.showSingleFile);

export default csvRouter;
