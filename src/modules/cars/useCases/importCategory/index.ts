import { ImportCategoryUseCase } from "./ImportCatergoryUseCase";
import { ImportCategoryController } from "./importCategoryController";

const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController };
