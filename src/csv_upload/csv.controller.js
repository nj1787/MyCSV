import CsvModel from "./csv.model.js";

export default class CsvController {
  constructor() {
    this.csvModel = new CsvModel();
  }

  homepage(req, res) {
    res.render("home");
  }

  showAllFiles(req, res) {
    console.log("Inside Show All Controller");
    res.status(200).end("<h1>Displaying All Uploaded Files</h1>");
  }

  uploadFile(req, res) {
    console.log("Inside Upload File Controller");
    res.redirect("/csv");
  }

  showSingleFile(req, res) {
    console.log("Inside Show Single File Controller");
    res.status(200).end("<h1>Showing All Data Of File.</h1>");
  }
}
