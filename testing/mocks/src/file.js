const { readFile } = require("fs/promises");
const { join } = require("path");
const { error } = require("./constants");

const DEFAULT_OPTION = {
  lines: 4,
  fields: ["id", "name", "profession", "age"],
};

class ReadFile {
  static async csvToJson(filePath) {
    const content = await ReadFile.getFileContent(filePath);
    const validation = this.isValid(content);
    if (!validation.valid) throw new Error(validation.error);
    return content;
  }

  static async getFileContent(filePath) {
    const filename = join(__dirname, filePath);
    return (await readFile(filename)).toString("utf8");
  }

  static isValid(csvString, option = DEFAULT_OPTION) {
    const [header, ...fileWithoutHeader] = csvString.split("\n");
    const headerIsValid = header === option.fields.join(",");
    if (!headerIsValid) {
      return {
        error: error.FILE_LENGTH_ERROR_MESSAGE,
        valid: false,
      };
    }
  }
}

(async () => {
  const result = await ReadFile.csvToJson("../invalid-header.csv");
  //console.log(result);
  ReadFile.isValid(result);
})();
