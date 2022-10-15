import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";


class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category | null {
    console.log(name);
    return null;
  }
  list(): Category[] | null {
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
  }
}

export { PostgresCategoriesRepository };