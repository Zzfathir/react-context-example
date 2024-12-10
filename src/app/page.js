"use client"
import Image from "next/image";
import { ThemeProvider, useTheme } from "./store/Theme";

export default function Home() {
  const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();

    return <button onClick={toggleTheme}>Switch to {theme === "light" ? "Dark" : "Light"} Mode</button>;
  };

  const ThemedComponent = () => {
    const { theme } = useTheme();

    return (
      <div
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          padding: "20px",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
        <ThemeToggleButton />
      </div>
    );
  };

  return (
    <ThemeProvider>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
}
