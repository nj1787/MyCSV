import CsvModel from "./csv.model.js";
import csv from "csv-parser";
import path from "path";
import fs from "fs";

const headers = []; // Store CSV headers
const rows = []; // Store CSV rows

export default class CsvController {
  constructor() {
    this.csvModel = new CsvModel();
  }

  homepage(req, res) {
    res.render("home");
  }

  showAllFiles(req, res) {
    console.log("Inside Show All Controller");
    const csvFiles = CsvModel.showAllFiles();
    console.log(csvFiles);
    res.render("filelist", { csvFiles });
  }

  uploadFile(req, res) {
    console.log("Inside Upload File Controller");
    // const csvFileName = "public/uploaded_files/" + req.file.filename;
    const csvFileName = req.file.filename;
    console.log(csvFileName);
    CsvModel.uploadFile(csvFileName);
    res.redirect("/csv");
  }

  showSingleFile(req, res) {
    const fileName = req.params.filename;
    const filePath = path.resolve("public/uploaded_files", fileName);
    console.log(filePath);

    const headers = []; // Store CSV headers
    const rows = []; // Store CSV rows

    fs.createReadStream(filePath)
      .pipe(csv({ separator: "," }))
      .on("data", (row) => {
        if (headers.length === 0) {
          // First row contains headers
          headers.push(...Object.keys(row));
        }
        rows.push(row);
      })
      .on("end", () => {
        // Render the 'data' EJS template and pass headers and rows as variables
        res.render("data", { headers, rows });
      });
  }
}
