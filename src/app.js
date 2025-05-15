import express from "express";
import morgan from "morgan";
import { config } from "./config/config.js";
import { cancionRouter } from "./routes/cancion.router.js";
import { dataExternalRouter } from "./routes/dataExternal.router.js";
import { statusRouter } from "./routes/status.router.js";

const app = express();

app.use(
	morgan(":method :url :status :res[content-length] - :response-time ms"),
);

app.use(express.json());

app.use("/api", statusRouter);
app.use("/canciones", cancionRouter);
app.use("/api", dataExternalRouter);

app.listen(config.PORT, () => {
	const message = `👓 SERVER is UP at http://${config.HOST}:${config.PORT}`;
	console.log(message);
});
