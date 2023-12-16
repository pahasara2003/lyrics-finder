// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TiAdjustBrightness } from "react-icons/ti";
import { TiWeatherNight } from "react-icons/ti";
import { Button } from "@nextui-org/react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme === "dark" ? (
        <Button
          className="my-1 "
          isIconOnly
          size="lg"
          onClick={() => {
            setTheme("light");
          }}
        >
          <TiAdjustBrightness />
        </Button>
      ) : (
        <Button
          className="my-1 "
          isIconOnly
          size="lg"
          onClick={() => {
            setTheme("dark");
          }}
        >
          <TiWeatherNight />
        </Button>
      )}
    </div>
  );
}
