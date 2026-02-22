import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Home,
  Menu,
  X,
  Layers,
  BookOpen,
  Ticket,
  Users,
  LayoutDashboard,
} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Estilo base para los links y estilo para cuando están activos
  const linkProps = {
    onClick: () => setIsOpen(false),
    className:
      "flex items-center gap-3 p-3 rounded-lg hover:bg-purple-800/50 transition-all duration-200 mb-2 text-purple-100",
    activeProps: {
      className:
        "flex items-center gap-3 p-3 rounded-lg bg-purple-600 shadow-md shadow-purple-900/20 text-white mb-2",
    },
  };

  useEffect(() => {
    console.log("isOpen:", isOpen);
  }, [isOpen]);

  return (
    <>
      {/* Header Principal */}
      <header className="p-4 flex items-center bg-purple-900 text-white shadow-lg border-b border-purple-800">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
          className="p-2 hover:bg-purple-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        <div className="ml-4 flex items-center gap-2">
          <LayoutDashboard className="text-purple-300" size={24} />
          <h1 className="text-xl font-bold tracking-tight">
            <Link to="/" className="hover:text-purple-200 transition-colors">
              SistemaTurnos
            </Link>
          </h1>
        </div>
      </header>

      {/* Overlay para cerrar al hacer clic fuera */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar - Aside */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-slate-950 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-5 border-b border-purple-900/50 bg-purple-950/30">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center">
              <Ticket size={18} />
            </div>
            <span className="font-bold text-lg">Menú Principal</span>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-purple-900 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navegación */}
        <nav className="flex-1 p-4 overflow-y-auto custom-scrollbar">
          <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-4 ml-2">
            General
          </p>

          <Link to="/" {...linkProps}>
            <Home size={20} />
            <span className="font-medium">Inicio</span>
          </Link>

          <div className="my-4 border-t border-purple-900/30" />
          <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-4 ml-2">
            Gestión
          </p>

          <Link to="/turns" {...linkProps}>
            <Ticket size={20} />
            <span className="font-medium">Turnos</span>
          </Link>

          <Link to="/areas" {...linkProps}>
            <Layers size={20} />
            <span className="font-medium">Áreas</span>
          </Link>

          <Link to="/catalogs" {...linkProps}>
            <BookOpen size={20} />
            <span className="font-medium">Catálogos</span>
          </Link>

          <Link to="/users" {...linkProps}>
            <Users size={20} />
            <span className="font-medium">Usuarios</span>
          </Link>
        </nav>

        {/* Footer del Sidebar */}
        <div className="p-4 border-t border-purple-900/50 bg-purple-950/20">
          <div className="flex items-center gap-3 px-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-purple-300 italic">
              Sistema Operativo
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
