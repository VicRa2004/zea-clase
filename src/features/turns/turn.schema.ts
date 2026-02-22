import z from "zod";
import { TipoAreaEnum } from "../catalogs/catalogs.types";

export const TurnCreateSchema = z.object({
	idTipoArea: z.number().positive(),
	folio: z.string().max(5),
});

export const GetContadorSchema = z.object({
	idTipoArea: z.number().positive().default(TipoAreaEnum.CAJA),
});
