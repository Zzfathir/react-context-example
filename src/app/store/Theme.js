"use client";

const { createContext, useState, useContext } = require("react");

const Theme = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return <Theme.Provider value={{ theme, toggleTheme }}>{children}</Theme.Provider>;
};

export const useTheme = () => useContext(Theme);
