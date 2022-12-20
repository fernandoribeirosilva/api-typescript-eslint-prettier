import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./ImportCatergoryUseCase";

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) { }

  handle(request: Request, response: Response) {
    const { file } = request;

    if (!file) throw new Error("file is required");

    this.importCategoryUseCase.execute(file);

    return response.send();
  }
}

export { ImportCategoryController };
