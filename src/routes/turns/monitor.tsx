import { TurnCardMonitor } from "@/components/features/turns/TurnCardMonitor";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/turns/monitor")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <section className="shadow-lg p-4">
        <h2 className="text-2xl">Lista de pendientes</h2>
        <TurnCardMonitor code="C001" />
        <TurnCardMonitor code="E007" />
        <TurnCardMonitor code="E008" />
        <TurnCardMonitor code="C008" />
      </section>
      <section className="shadow-lg p-4 mt-3">
        <h2 className="text-2xl mt-2">Atendiendo</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl mt-2">Folio</h3>
            <TurnCardMonitor code="C001" />
            <TurnCardMonitor code="C002" />
            <TurnCardMonitor code="C003" />
          </div>
          <div>
            <h3 className="text-xl mt-2">Modulo</h3>
            <TurnCardMonitor code="C001" />
            <TurnCardMonitor code="C002" />
            <TurnCardMonitor code="C003" />
          </div>
        </div>
      </section>
    </div>
  );
}
