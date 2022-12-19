import { parse as csvParse } from "csv-parse";
import fs from "node:fs";

class ImportCategoryUseCase {
  execute(file: Express.Multer.File | null | undefined): void {
    if (!file) {
      throw new Error("File not found!");
    }

    const stream = fs.createReadStream(file.path);
    const parseFile = csvParse();

    stream.pipe(parseFile);
    parseFile.on("data", async (line) => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };
