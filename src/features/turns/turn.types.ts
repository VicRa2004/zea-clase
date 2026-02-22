import type { PaginationFilters } from "@/core/shared/types";

export interface ContadorFilters {
	idTipoArea: number;
	fecha?: Date;
}

export interface Contador {
	id: number;
	consecutivo: number;
	fecha: Date;
	tipoArea: {
		id: number;
		nombre: string;
	};
}

export interface TurnFilters extends PaginationFilters {
	fecha?: Date;
	idArea?: number;
	idEstatu?: number;
}

export interface Turn {
	id: number;
	folio: string;
	// cuando se creo
	fechaInicio: Date;
	// cuando se finalizo
	fechaCompletado?: Date;
	// area tambien puede ser modulo
	area?: {
		id: number;
		nombre: string;
		idTipoArea: number;
		tipoArea: string;
	};
	estatu: {
		id: number;
		nombre: string;
	};
	genero?: {
		id: number;
		nombre: string;
	};
	usuario?: {
		id: number;
		nombre: string;
	};
}

export interface TurnCreate {
	folio: string;
	idEstatu: number;
	idArea: number;
}

export interface TurnFinalizado {
	id: number;
	idArea: number;
	// preguntar si es el cliente o el recepcionista
	idUsuario: number;
	idGenero: number;
}
