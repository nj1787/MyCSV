import express from "express";
import CsvController from "./csv.controller.js";
import { uploadFile } from "../../middlewares/uploadFile.middleware.js";

const csvRouter = express.Router();

const csvController = new CsvController();

csvRouter.get("/", csvController.homepage);
csvRouter.get("/all", csvController.showAllFiles);
csvRouter.post(
  "/upload",
  uploadFile.single("csvFile"),
  csvController.uploadFile
);
csvRouter.get("/single/:filename", csvController.showSingleFile);

export default csvRouter;
