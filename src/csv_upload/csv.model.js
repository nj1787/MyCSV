let allCsvFiles = [];
export default class CsvModel {
  constructor(fileName) {
    this.fileName = fileName;
  }

  static showAllFiles() {
    return allCsvFiles;
  }

  static uploadFile() {}

  static displayFileData() {}
}
