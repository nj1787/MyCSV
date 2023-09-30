let allCsvFiles = [];
export default class CsvModel {
  constructor(fileId, fileName) {
    this.fileName = fileName;
    this.fileId = fileId;
  }

  static showAllFiles() {
    return allCsvFiles;
  }

  static addSingleFile(file) {
    file.id = file.fileId + 1;
    allCsvFiles.push(file);
    return file;
  }

  static displayFileData(id) {
    const file = allCsvFiles.find((f) => f.fileId == id);
    return file;
  }
}
