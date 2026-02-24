import { TanStackDevtools } from "@tanstack/react-devtools";
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import Header from "../components/Header";

import appCss from "../styles.css?url";
import { NotFound } from "@/components/NotFound";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Sistema de turnos",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  // shellComponent: Solo el esqueleto HTML — siempre SSR, nunca se hidrata
  shellComponent: RootDocument,
  // component: El contenido real — se hidrata en el cliente y soporta useState/eventos
  component: RootLayout,
  notFoundComponent: () => {
    return <NotFound />;
  },
});

/**
 * Shell SSR-only: únicamente la estructura HTML base.
 * NO poner aquí componentes interactivos (useState, onClick, etc.)
 */
function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

/**
 * Layout principal — se hidrata en el cliente.
 * Aquí van los componentes interactivos como el Header.
 */
function RootLayout() {
  return (
    <>
      <Header />
      <main className="container flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <TanStackDevtools
        config={{
          position: "bottom-right",
        }}
        plugins={[
          {
            name: "Tanstack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  );
}
