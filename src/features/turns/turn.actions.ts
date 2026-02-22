import { createServerFn } from "@tanstack/react-start";
import { GetContadorSchema, TurnCreateSchema } from "./turn.schema";
import { createTurnInDb, generateFolio, getContadorInDb } from "./turn.service";
import { EstatuEnum, obtenerInicialArea } from "../catalogs/catalogs.types";

export const createTurn = createServerFn()
	.inputValidator(TurnCreateSchema)
	.handler(async ({ data: { idTipoArea } }) => {
		const inicial = obtenerInicialArea(idTipoArea);

		const contador = await getContadorInDb({ idTipoArea: idTipoArea });

		if (!contador) {
			throw new Error("No existe el tipo de area");
		}

		const formateado = generateFolio(inicial, contador.consecutivo);

		await createTurnInDb({
			folio: `${inicial}${formateado}`,
			idArea: idTipoArea,
			idEstatu: EstatuEnum.EN_ESPERA,
		});
	});

export const getOneContador = createServerFn()
	.inputValidator(GetContadorSchema)
	.handler(async ({ data: { idTipoArea } }) => {
		const response = await getContadorInDb({ idTipoArea });

		if (!response) {
			throw new Error("El contador no existe");
		}

		return response;
	});
