import { UserCard } from "@/components/features/users/UserCard";
import { GetAllUser } from "@/features/users/user.actions";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users/")({
	component: UsersListPage,
	loader: async () => await GetAllUser(),
});

function UsersListPage() {
	// Obtenemos los datos tipados automáticamente del loader
	const { data } = Route.useLoaderData();

	console.log();

	return (
		<div className="">
			<h1 className="text-3xl font-semibold mb-4">Lista de Usuarios</h1>

			<div className="grid grid-cols-2 gap-4">
				{data.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</div>
		</div>
	);
}
