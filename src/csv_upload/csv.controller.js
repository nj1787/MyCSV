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
    console.log("Inside Show Single File Controller");
    console.log(req.params.filename);
    res.status(200).end("<h1>Showing All Data Of File.</h1>");
  }
}
