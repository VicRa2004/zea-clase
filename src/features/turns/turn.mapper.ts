import type { Prisma } from "@/generated/client";
import type { Turn } from "./turn.types";

export type TurnoWithRelations = Prisma.TurnoGetPayload<{
	include: {
		area: { include: { tipoArea: true } };
		estatu: true;
		genero: true;
		usuario: true;
	};
}>;

export const mapPrismaTurnToTurn = (turn: TurnoWithRelations): Turn => {
	return {
		id: turn.id,
		folio: turn.folio,
		fechaInicio: turn.fechaHora,
		fechaCompletado: turn.fechaHoraAtendida ?? undefined,
		estatu: {
			id: turn.fkEstatu,
			nombre: turn.estatu.nombre,
		},
		// Solo mapeamos si la relación existe en DB
		usuario: turn.usuario
			? { id: turn.usuario.id, nombre: turn.usuario.nombre }
			: undefined,

		genero: turn.genero
			? { id: turn.genero.id, nombre: turn.genero.nombre }
			: undefined,

		area: turn.area
			? {
					id: turn.area.id,
					nombre: turn.area.nombre,
					idTipoArea: turn.area.tipoArea.id,
					tipoArea: turn.area.tipoArea.nombre,
				}
			: undefined,
	};
};
