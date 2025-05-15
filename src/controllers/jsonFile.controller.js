import { jsonFileService } from "../services/jsonFile.service.js";

export const jsonFileController = {
	getBooks: async (req, res) => {
		try {
			const booksArray = await jsonFileService.getAllBooks();
			res.status(200).json({
				json_file: booksArray,
			});
		} catch (error) {
			if (error.message.includes("no fue encontrado")) {
				res.status(404).json({
					message: "Error al obtener los libros.",
					error: error.message,
				});
			} else {
				res.status(500).json({
					message: "Error al obtener los libros.",
					error: error.message,
				});
			}
		}
	},
};
