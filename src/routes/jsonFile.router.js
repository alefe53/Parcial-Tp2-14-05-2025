import express from "express";
import { jsonFileController } from "../controllers/jsonFile.controller.js"; // Ajusta la ruta si es necesario

export const jsonFileRouter = express.Router();

jsonFileRouter.get("/json_file", jsonFileController.getBooks);
