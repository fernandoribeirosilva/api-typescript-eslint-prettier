import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryServe {
  constructor(private categoriesRepository: CategoriesRepository) { }

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExist = this.categoriesRepository.fidByName(name);
    if (categoryAlreadyExist) {
      throw new Error("Category already exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryServe };