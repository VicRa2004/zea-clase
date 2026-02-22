import { prisma } from "@/core/config/prisma";
import type { TipoArea } from "./catalogs.types";

export const getTiposAreaInDb = async (): Promise<TipoArea[]> => {
	const tiposArea = await prisma.tipoArea.findMany();

	return tiposArea;
};
