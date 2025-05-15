import { dataExternalService } from "../services/dataExternal.service.js";

export const dataExternalController = {
	fetchData: async (req, res) => {
		try {
			const result = await dataExternalService.fetchAndSaveData();
			res.status(200).json({
				message: result.message,
				filePath: result.path,
			});
		} catch (error) {
			res.status(500).json({
				message: "Error",
				error: error.message,
			});
		}
	},
};
