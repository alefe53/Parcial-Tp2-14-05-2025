import { JsonHandler } from "../utils/JsonManager.js";

export const CancionRepository = {
	getById: async (id) => {
		//console.log(id);
		const canciones = await JsonHandler.read();
		//console.log("Repository: Todas las canciones leídas:", canciones);
		if (!canciones) return null;

		const cancion = canciones.find((c) => c.id === id);

		if (!cancion) return null;

		return cancion;
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
	deleteById: async (id) => {
		const canciones = await JsonHandler.read();
		console.log(canciones);
		if (!canciones) return null;

		const index = canciones.find((ca) => ca.id === id);

		if (!index) return;

		const cancionesResponse = canciones.filter((c) => c.id !== id);

		try {
			await JsonHandler.write(cancionesResponse);
			return id;
		} catch (e) {
			return null;
		}
	},
	updateByAutor: async (autor, anioLanzamiento) => {
		const cancionesLeidas = await JsonHandler.read();
		if (!cancionesLeidas) {
			console.error("Repositorio: No se pudo leer el archivo de canciones.");
			return null;
		}
		let autorEncontrado = false;
		const cancionesActualizadas = cancionesLeidas.map((c) => {
			if (c.autor === autor) {
				autorEncontrado = true;
				return {
					...c,
					anioLanzamiento: anioLanzamiento,
				};
			}
			return c;
		});

		if (!autorEncontrado) {
			return [];
		}

		try {
			await JsonHandler.write(cancionesActualizadas);
			const cancionesModificadas = cancionesActualizadas.filter(
				(c) => c.autor === autor && c.anioLanzamiento === anioLanzamiento,
			);
			return cancionesModificadas;
		} catch (e) {
			console.error("Error al escribir en updateByAutor:", e);
			return null;
		}
	},
};
