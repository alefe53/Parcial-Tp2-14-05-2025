import { JsonHandler } from "../utils/JsonManager.js";

export const CancionRepository = {
	getById: async (id) => {
		console.log(id);
		const canciones = await JsonHandler.read();
		console.log(canciones);
		if (!canciones) return null;

		const cancion = canciones.find((cancion) => cancion.id === id);

		if (!cancion) return null;

		return canciones;
	},
	createOne: async (cancion) => {
		const canciones = await JsonHandler.read();
		canciones.push(cancion);
		try {
			await JsonHandler.write(canciones);
		} catch (e) {
			console.error({ message: e.message });
		}
	},
};
