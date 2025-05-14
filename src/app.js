import express from "express";
import { config } from "./config/config.js";

const app = express();

app.listen(config.PORT, () => {
	const message = `👓 SERVER is UP at http://${config.HOST}:${config.PORT}`;
	console.log(message);
});
