import { createServerFn } from "@tanstack/react-start";
import { getUserInDb, getUsersInDb } from "./user.service";
import { GetUserByIdSchema } from "./user.schema";

export const GetAllUser = createServerFn().handler(async () => {
	return await getUsersInDb();
});

export const GetOneUser = createServerFn()
	.inputValidator((data: unknown) => GetUserByIdSchema.parse(data))
	.handler(async ({ data }) => {
		const response = await getUserInDb(data.userId);

		if (!response) {
			throw new Error("No existe el usuario");
		}

		return response;
	});
