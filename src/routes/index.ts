import { Request, Response, Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

const router = Router();

router.get("/ping", (req: Request, res: Response) => {
  return res.status(200).json({ pong: true });
});

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);

export { router };
