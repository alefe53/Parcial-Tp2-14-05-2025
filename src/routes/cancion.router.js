import { Router } from "express";
import { CancionController } from "../controllers/cancion.controller.js";

const cancionRouter = Router();

cancionRouter.get("/cancion-valid/:id", CancionController.cancionValidation);
cancionRouter.post("/cancion", CancionController.cancionCreateOne);
cancionRouter.delete("/cancion/:id", CancionController.cancionDeleteOne);
cancionRouter.put(
	"/update-anioLanzamiento",
	CancionController.cancionUpdateByAutor,
);

export { cancionRouter };
