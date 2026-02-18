import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="">
			<h1 className="text-3xl font-semibold">Sistema de Turnos de espera</h1>
		</div>
	);
}
