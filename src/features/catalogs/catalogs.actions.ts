import { createServerFn } from "@tanstack/react-start";
import { getTiposAreaInDb } from "./catalogs.service";

export const getAllTiposArea = createServerFn().handler(async () => {
	const data = await getTiposAreaInDb();

	// imprimimos el mensaje por consola.
	console.log(data);

	return data;
});
