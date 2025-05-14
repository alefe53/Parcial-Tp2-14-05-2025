import { CancionService } from "../services/cancion.service.js";

export const CancionController = {
	cancionValidation: async (req, res) => {
		const { id } = req.params;
		const cancion = await CancionService.serviceCancionValidation(id);

		if (!cancion) {
			res.status(404).json({
				payload: null,
				message: "No hay Cancion",
				ok: false,
			});
			return;
		}

		res.status(200).json({
			message: "Success",
			payload: cancion.id,
			ok: true,
		});
		return;
	},
	cancionCreateOne: async (req, res) => {
		const { cancion } = req.body;
		try {
			const cancionResponse = CancionService.serviceCancionCreation(cancion);
			res.status(200).json({
				message: "Success",
				payload: { ...cancionResponse, id: "******" },
				ok: true,
			});
			return;
		} catch (e) {
			console.log({ message: e.message, mensaje: "algo salio mal" });
			res.status(404).json({
				payload: null,
				message: "No se pudo crear la cancion",
				ok: false,
			});
			return;
		}
	},
};
