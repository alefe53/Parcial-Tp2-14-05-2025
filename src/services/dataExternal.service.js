import  fs  from "node:fs/promises";
import path from "node:path";
import {config} from "../config/config.js"


const DATA_URL = config.EXTERNAL_DATA_URL;
const SAVE_PATH = path.resolve(config.EXTERNAL_DATA_SAVE_PATH);

export const dataExternalService = {
	fetchAndSaveData: async () => {
		try {
			console.log(`Intentando descargar datos desde: ${DATA_URL}`);
			const response = await fetch(DATA_URL);

			if (!response.ok) {
				throw new Error(
					`Error al descargar el archivo: ${response.status} ${response.statusText}`,
				);
			}

			const data = await response.text(); // Obtenemos el contenido como texto (CSV)

			// Asegurarse de que el directorio db exista
			const dbDir = path.dirname(SAVE_PATH);
			try {
				await fs.access(dbDir);
			} catch (error) {
				// Si no existe, lo creamos
				console.log(`El directorio ${dbDir} no existe, creándolo...`);
				await fs.mkdir(dbDir, { recursive: true });
			}

			await fs.writeFile(SAVE_PATH, data);
			console.log(`Archivo guardado exitosamente en: ${SAVE_PATH}`);
			return {
				success: true,
				path: SAVE_PATH,
				message: "Datos descargados y guardados correctamente.",
			};
		} catch (error) {
			console.error("Error en fetchAndSaveData:", error);
			throw error; // Re-lanzamos el error para que el controlador lo maneje
		}
	},
};
