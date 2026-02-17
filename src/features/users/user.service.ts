import type { GetAll } from "@/core/shared/types";
import type { User, UserCreate, UserFilters } from "./user.types";
import { prisma } from "@/core/config/prisma";

export const getUsersInDb = async (
	data: UserFilters = {
		limit: 10,
		page: 1,
	},
): Promise<GetAll<User>> => {
	const skip = (data.page - 1) * data.limit;

	const usuarios = await prisma.usuario.findMany({
		skip,
		take: data.limit,
		where: {
			username: data.username,
			nombre: { contains: data.nombre },
		},
	});

	const totalItems = await prisma.usuario.count({
		where: {
			username: data.username,
			nombre: { contains: data.nombre },
		},
	});

	const totalPages = Math.ceil(totalItems / data.limit);

	return {
		data: usuarios.map((user) => {
			return {
				id: user.id,
				username: user.username,
				nombre: user.nombre,
				apellidoMaterno: user.apellidoMaterno || "",
				apellidoPaterno: user.apellidoPaterno || "",
				password: user.password,
			};
		}),
		meta: {
			totalItems,
			totalPages,
			page: data.page,
			limit: data.limit,
		},
	};
};

export const getUserInDb = async (id: number): Promise<User | null> => {
	const user = await prisma.usuario.findUnique({
		where: {
			id,
		},
	});

	if (!user) return null;

	return {
		id: user.id,
		username: user.password,
		nombre: user.nombre,
		apellidoPaterno: user.apellidoPaterno || "",
		apellidoMaterno: user.apellidoMaterno || "",
		password: user.password,
	};
};

export const createUserInDb = async (data: UserCreate): Promise<User> => {
	const user = await prisma.usuario.create({
		data: {
			nombre: data.nombre,
			password: data.password,
			username: data.username,
			apellidoMaterno: data.apellidoMaterno,
			apellidoPaterno: data.apellidoPaterno,
		},
	});

	return {
		id: user.id,
		username: user.password,
		nombre: user.nombre,
		apellidoPaterno: user.apellidoPaterno || "",
		apellidoMaterno: user.apellidoMaterno || "",
		password: user.password,
	};
};
