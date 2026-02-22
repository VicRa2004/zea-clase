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
