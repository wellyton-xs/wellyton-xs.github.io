import * as React from "react";
import "./global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "welly's page",
  description: "welly's webpage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>welly | home</title>
      </head>
      <body>
        <div id="root">
          <header>
            <a href="/" className="home-btn">
              home
            </a>
            <nav className="nav-bar">
              <ul>
                <li>
                  <a href="/services">Serviços</a>
                </li>
                <li>
                  <a href="/projects">Projetos</a>
                </li>
                <li>
                  <a href="/articles">Artigos</a>
                </li>
                <li>
                  <a href="/tortoise">Tortoise</a>
                </li>
              </ul>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
