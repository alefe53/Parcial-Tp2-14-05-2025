import { Cancion } from "../models/cancion.js";
import { CancionRepository } from "../repositories/canciones.repository.js";

export const CancionService = {
	serviceCancionValidation: (id) => {
		console.log(id);
		const idCancion = CancionRepository.getById(id);
		console.log(idCancion);
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
};
