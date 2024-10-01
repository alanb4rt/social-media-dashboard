import { useContext } from "react";
import { ThemeContext } from "../components/ThemeProvider";

export default function ToggleButton() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const handleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const togglePosition = !isDarkMode ? "justify-end" : "";

  return (
    <section className="flex flex-row items-center gap-4 w-fit">
      <p className="text-[var(--color-text-secondary)]">Dark Mode</p>
      <div className="ctn-toggle-button" aria-checked={isDarkMode}>
        <button
          className={`inline-flex ${togglePosition} w-14 border-2 border-transparent`}
          onClick={handleTheme}
        >
          <span className="inline-flex size-6 rounded-full bg-[var(--color-bg)]"></span>
        </button>
      </div>
    </section>
  );
}
