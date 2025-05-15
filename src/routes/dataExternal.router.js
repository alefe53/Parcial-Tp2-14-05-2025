import express from "express";
import { dataExternalController } from "../controllers/dataExternal.controller.js";

export const dataExternalRouter = express.Router();

dataExternalRouter.get("/data_externa", dataExternalController.fetchData);
