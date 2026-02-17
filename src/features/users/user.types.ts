import type { PaginationFilters } from "@/core/shared/types";

export interface UserFilters extends PaginationFilters {
	nombre?: string;
	username?: string;
}

export interface User {
	id: number;
	username: string;
	password: string;
	nombre: string;
	apellidoPaterno: string;
	apellidoMaterno: string;
}

export type UserCreate = Omit<User, "id">;

export type UserUpdate = Omit<User, "id" | "username">;
