import { GetOneUser } from "@/features/users/user.actions";
import { createFileRoute } from "@tanstack/react-router";
import z from "zod";

export const Route = createFileRoute("/users/$userId")({
	component: RouteComponent,
	params: {
		parse: (params) => ({
			userId: z.coerce.number().int().parse(params.userId),
		}),
		stringify: ({ userId }) => ({
			userId: `${userId}`,
		}),
	},
	loader: async ({ params }) => {
		return await GetOneUser({ data: { userId: params.userId } });
	},
});

function RouteComponent() {
	const { nombre } = Route.useLoaderData();

	return <div>Hola {nombre}</div>;
}
