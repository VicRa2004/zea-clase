import z from "zod";

export const UserCreateSchema = z.object({
	nombre: z
		.string("El nombre debe ser un texto")
		.min(4, "El nombre debe tener mas de 4 caracteres")
		.max(20, "El nombre debe tener maximo 20 caracteres"),
	password: z
		.string("La contraseña debe ser un texto")
		.min(6, "La contraseña debe tener minimo 6 caracteres")
		.max(20, "La contraseña debe tener maximo 20 caracteres"),
});
