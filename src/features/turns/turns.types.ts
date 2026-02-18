export interface Contador {
	id: number;
	consecutivo: number;
	fecha: Date;
	tipoArea: {
		id: number;
		nombre: string;
	};
}

export interface Turn {
	id: number;
	folio: string;
	// cuando se creo
	fechaHora: Date;
	// cuando se finalizo
	fechaHoraAtendida?: Date;
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
}

export interface TurnFinalizado {
	id: number;
	idArea: number;
	// preguntar si es el cliente o el recepcionista
	idUsuario: number;
	idGenero: number;
}
