"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Provider({ children }) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme={
          typeof window !== "undefined"
            ? localStorage.getItem("theme") === null
              ? "light"
              : localStorage.getItem("theme")
            : "light"
        }
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
