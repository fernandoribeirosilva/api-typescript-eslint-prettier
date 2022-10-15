import { Router, Request, Response } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryServe } from "../modules/cars/services/CreateCategoryServe";

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body;

  const createCategoryServe = new CreateCategoryServe(categoriesRepository);
  createCategoryServe.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request: Request, response: Response) => {
  const category = categoriesRepository.list();

  return response.status(200).json({ category })
})

export { categoriesRoutes };