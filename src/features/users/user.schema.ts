import z from "zod";

export const GetUserByIdSchema = z.object({
	userId: z.coerce.number().int().positive(),
});

export const UserCreateSchema = z.object({
	nombre: z
		.string("El nombre debe ser un texto")
		.min(4, "El nombre debe tener mas de 6 caracteres")
		.max(20, "El nombre debe tener maximo 20 caracteres"),
	password: z
		.string("La contraseña debe ser un texto")
		.min(6, "La contraseña debe tener minimo 6 caracteres")
		.max(20, "La contraseña debe tener maximo 20 caracteres"),
	username: z
		.string("El username debe ser un texto")
		.min(8, "El username debe tener mas de 8 caracteres")
		.max(18, "El username debe tener maximo 16 caracteres"),
	apellidoPaterno: z
		.string("El apellido paterno debe ser un texto")
		.min(6, "El apellido paterno debe tener mas de 6 caracteres")
		.max(20, "El apellido paterno debe tener maximo 20 caracteres"),
	apellidoMaterno: z
		.string("El apellido materno debe ser un texto")
		.min(6, "El apellido materno debe tener mas de 6 caracteres")
		.max(20, "El apellido materno debe tener maximo 20 caracteres"),
});
