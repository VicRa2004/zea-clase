import { getTiposAreaInDb } from "./catalogs.service";

export const getAllTiposArea = async () => {
	const data = getTiposAreaInDb();

	// imprimimos el mensaje por consola.
	console.log(data);

	return data;
};
