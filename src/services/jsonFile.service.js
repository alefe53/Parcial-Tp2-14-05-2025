import fs from "node:fs/promises";
import path from "node:path";
import { config } from "../config/config.js";

const BOOKS_FILE_PATH = path.resolve(config.BOOKS_JSON_PATH);

export const jsonFileService = {
	getAllBooks: async () => {
		try {
			const data = await fs.readFile(BOOKS_FILE_PATH, "utf-8");
			const books = JSON.parse(data);
			return books;
		} catch (error) {
			if (error.code === "ENOENT") {
				console.error("Error: El archivo no fue encontrado.");
				throw new Error("El archivo de libros no fue encontrado.");
			}
			console.error(error);
			throw new Error("Error al procesar el archivo de libros.");
		}
	},
};


