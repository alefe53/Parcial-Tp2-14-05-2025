import { Router } from "express";

const statusRouter = Router();

statusRouter.get("/v01/status", (req, res) => {
	res.json({
		status: 200,
		timestatus: new Date().toISOString(),
		message: "¡Bienvenidos a la música!",
	});
});

statusRouter.get("/v02/status", (req, res) => {
	res.json({
		status: 200,
		timestatus: new Date().toISOString(),
		message: "Música para siempre",
	});
});


export { statusRouter };
