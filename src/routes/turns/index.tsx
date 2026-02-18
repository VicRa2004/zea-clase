import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/turns/")({
	component: RouteComponent,
});

const rutas = [
	{
		label: "Crear turno - botonera",
		to: "/turns/create",
	},
	{
		label: "Monitor - vista al publico",
		to: "/turns/monitor",
	},
	{
		label: "Modulos- atención al cliente",
		to: "/turns/modules",
	},
];

function RouteComponent() {
	return (
		<div>
			<h1 className="text-2xl font-semibold">Apartado - Turnos</h1>

			<h2 className="text-lg mt-2">Apartados a visitar</h2>

			<div>
				{rutas.map((ruta) => (
					<div
						className="bg-gray-100 mt-4 p-4 rounded-lg flex flex-col gap-2"
						key={ruta.to}
					>
						<h3 className="font-semibold text-md">{ruta.label}</h3>
						<Link
							className="bg-indigo-400 p-2 rounded-md text-white"
							to={ruta.to}
						>
							Ir a
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
