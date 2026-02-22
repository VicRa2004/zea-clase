import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { getAllTiposArea } from "@/features/catalogs/catalogs.actions";
import {
  obtenerInicialArea,
  TipoAreaEnum,
} from "@/features/catalogs/catalogs.types";
import { getOneContador } from "@/features/turns/turn.actions";
import { generateFolio } from "@/features/turns/turn.service";
import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Hash } from "lucide-react";

export const Route = createFileRoute("/turns/create")({
  component: RouteComponent,
  loader: async () => {
    /*const tiposArea = await getAllTiposArea();
    const contador = await getOneContador({
      data: { idTipoArea: TipoAreaEnum.CAJA },
    });

    const inicial = obtenerInicialArea(TipoAreaEnum.CAJA);

    const folio = generateFolio(inicial, contador.consecutivo);

    return { tiposArea, folio }; */
  },
});

function RouteComponent() {
  /*const { tiposArea, folio } = Route.useLoaderData();

  const options = tiposArea.map((tipo) => ({
    value: String(tipo.id),
    text: tipo.nombre,
  }));*/

  return (
    <div>
      <h2 className="text-2xl font-semibold">Solicitudes</h2>

      <form className="mt-4 p-4 rounded-lg shadow-lg flex flex-col" action="">
        <Select name="area" label="Selecione el area" options={[]} />
        <Button type="submit">Enviar</Button>
      </form>
      <section className="mt-6 overflow-hidden rounded-xl border border-indigo-100 bg-white shadow-sm transition-all hover:shadow-md ">
        {/* Línea decorativa superior opcional para dar identidad */}
        <div className="h-1.5 bg-indigo-600" />

        <div className="p-5 space-y-4">
          {/* Sección de Fecha */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <Calendar size={20} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Fecha de Emisión
              </p>
              <p className="text-sm font-semibold text-slate-700">
                {new Date().toLocaleDateString("es-MX", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Divisor sutil */}
          <div className="h-px bg-slate-100" />

          {/* Sección de Folio */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm shadow-indigo-200">
              <Hash size={20} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Número de Folio
              </p>
              <p className="text-lg font-mono font-bold text-slate-900 tracking-tight">
                {`folio`}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
