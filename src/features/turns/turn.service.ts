import type { GetAll } from "@/core/shared/types";
import { prisma } from "@/core/config/prisma";
import type {
	Contador,
	ContadorFilters,
	Turn,
	TurnCreate,
	TurnFilters,
} from "./turn.types";
import { mapPrismaTurnToTurn } from "./turn.mapper";

export const getTurnsInDb = async (
	filters: TurnFilters = {
		limit: 10,
		page: 1,
	},
): Promise<GetAll<Turn>> => {
	// dejamos la fehca pendiente para despues
	const { limit, page, idArea, idEstatu } = filters;

	const skip = (page - 1) * limit;

	const turns = await prisma.turno.findMany({
		skip,
		take: limit,
		include: {
			area: {
				include: {
					tipoArea: true,
				},
			},
			estatu: true,
			genero: true,
			usuario: true,
		},
		where: {
			fkAreaAsignada: idArea,
			fkEstatu: idEstatu,
		},
	});

	const totalItems = await prisma.turno.count({
		where: {
			fkAreaAsignada: idArea,
			fkEstatu: idEstatu,
		},
	});

	const totalPages = Math.ceil(totalItems / limit);

	return {
		data: turns.map((turn) => mapPrismaTurnToTurn(turn)),
		meta: {
			limit,
			page,
			totalItems,
			totalPages,
		},
	};
};

export const getTurnInDb = async (id: number): Promise<Turn | null> => {
	const turn = await prisma.turno.findUnique({
		include: {
			area: {
				include: {
					tipoArea: true,
				},
			},
			estatu: true,
			genero: true,
			usuario: true,
		},
		where: {
			id,
		},
	});

	if (!turn) return null;

	return mapPrismaTurnToTurn(turn);
};

export const createTurnInDb = async (data: TurnCreate) => {
	const turn = await prisma.turno.create({
		include: {
			area: {
				include: {
					tipoArea: true,
				},
			},
			estatu: true,
			genero: true,
			usuario: true,
		},
		data: {
			folio: data.folio,
			fechaHora: new Date(),
			fkEstatu: data.idEstatu,
		},
	});

	return mapPrismaTurnToTurn(turn);
};

export const getContadorInDb = async (
	filters: ContadorFilters,
): Promise<Contador | null> => {
	const { idTipoArea } = filters;

	const data = await prisma.contador.findFirst({
		where: {
			fkTipoArea: idTipoArea,
		},
		include: {
			tipoArea: true,
		},
	});

	if (!data) return null;

	return {
		id: data.id,
		consecutivo: data.consecutivo,
		fecha: data.fecha,
		tipoArea: data.tipoArea,
	};
};

export const generateFolio = async (
	inicial: string | null,
	consecutivo: number,
) => {
	if (!inicial) {
		throw new Error("No existe el tipo de area");
	}

	const formateado = consecutivo.toString().padStart(4, "0");

	return `${inicial}${formateado}`;
};
