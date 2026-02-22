export interface TipoArea {
	id: number;
	nombre: string;
}

export interface Area {
	id: number;
	nombre: string;
	idTipoArea: number;
}

export interface Estatu {
	id: number;
	nombre: string;
}

export interface Genero {
	id: number;
	nombre: string;
}

// ====================================
// ENUMS===============================
// ====================================

export enum EstatuEnum {
	EN_ESPERA = 1,
	ATENDIENDO = 2,
	FINALIZADO = 3,
	CANCELADO = 4,
}

export enum GeneroEnum {
	FEMENINO = 1,
	MASCULINO = 2,
	OTRO = 3,
}

export enum TipoAreaEnum {
	CAJA = 1,
	EJECUTIVO = 2,
	SEGUROS = 3,
}

/**
 * Obtiene la inicial correspondiente al tipo de área.
 * @param tipo - El valor del enum TipoAreaEnum
 * @returns La inicial en mayúscula o null si no se encuentra
 */
export const obtenerInicialArea = (tipo: TipoAreaEnum): string | null => {
	const mapaIniciales: Record<number, string> = {
		[TipoAreaEnum.CAJA]: "C",
		[TipoAreaEnum.EJECUTIVO]: "E",
		[TipoAreaEnum.SEGUROS]: "S",
	};

	return mapaIniciales[tipo] || null;
};
