import { Cancion } from "../models/cancion.js";
import { CancionRepository } from "../repositories/canciones.repository.js";

export const CancionService = {
	serviceCancionValidation: async (id) => {
		const idCancion = await CancionRepository.getById(id);
		if (!idCancion) return null;
		return idCancion;
	},
	serviceCancionCreation: (cancion) => {
		const dataCancion = {
			...cancion,
			id: crypto.randomUUID().toString(),
		};

		const modelCancion = new Cancion(
			dataCancion.id,
			dataCancion.titulo,
			dataCancion.autor,
			dataCancion.anioLanzamiento,
		);

		CancionRepository.createOne(modelCancion);

		return modelCancion;
	},
	serviceCancionDelete: async (id) => {
		const idCancion = await CancionRepository.deleteById(id);
		if (!idCancion) return null;
		return idCancion;
	},
	serviceUpdateCancion: async (autor, anioLanzamiento) => {
		const canciones = await CancionRepository.updateByAutor(
			autor,
			anioLanzamiento,
		);
		if (canciones === null) {
			return null;
		}
		return canciones;
	},
};
