import CsvModel from "./csv.model.js";

export default class CsvController {
  constructor() {
    this.csvModel = new CsvModel();
  }

  showAllFiles(req, res) {
    console.log("Inside Show All Controller");
    res.status(200).end("<h1>Displaying All Uploaded Files</h1>");
  }

  uploadFile(req, res) {
    console.log("Inside Upload File Controller");
    res.status(201).end("<h1>Uploaded File Successfully</h1>");
  }

  showSingleFile(req, res) {
    console.log("Inside Show Single File Controller");
    res.status(200).end("<h1>Showing All Data Of File.</h1>");
  }
}
