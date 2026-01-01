const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="px-4 py-2 rounded border"
    >
      {theme === "light" ? "🌙 Dark" : "☀ Light"}
    </button>
  );
};

export default ThemeToggle;