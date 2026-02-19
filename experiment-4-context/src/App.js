import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";

function Content() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Experiment 4: Context API</h1>
      <h2>Theme: {theme}</h2>

      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        Toggle Theme
      </button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

export default App;
