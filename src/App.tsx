import { ThemeProvider } from './design-system/themes/ThemeProvider';
import { GlobalStyles } from './design-system/themes/GlobalStyles';
import { useTheme } from './design-system/themes/ThemeProvider';
import DashboardPreview from './components/DashboardPreview';

function ThemeToggle() {
  const { toggleTheme, theme } = useTheme();
  return (
    <button
      className="fixed top-6 right-6 z-10 rounded-full px-4 py-2 bg-white/70 dark:bg-zinc-900/70 shadow-lg text-zinc-700 dark:text-zinc-200 font-semibold text-base transition hover:scale-105 hover:bg-white/90 dark:hover:bg-zinc-800/90"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme.mode === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

function AppContent() {
  const { theme } = useTheme();
  return (
    <>
      <GlobalStyles theme={theme} />
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-blue-100 to-emerald-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-700 transition-colors duration-500">
        <ThemeToggle />
        <div className="flex flex-col items-center gap-2 mt-12 mb-8 animate-fade-in">
          <img src="/favicon.svg" alt="Meowgenda logo" className="w-20 h-20 mb-2 drop-shadow-lg" />
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-800 dark:text-zinc-100 font-sans mb-1">Meowgenda</h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 font-medium font-sans mb-2 text-center max-w-xl">
            Your modern, touch-friendly smart display dashboard for calendar, notes, to-dos, weather, and more.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4 pb-16">
          <DashboardPreview type="time-weather" />
          <DashboardPreview type="calendar" />
          <DashboardPreview type="todo" />
          <DashboardPreview type="notes" />
          <DashboardPreview type="news" />
          <DashboardPreview type="settings" />
        </div>
        <footer className="text-zinc-400 dark:text-zinc-500 text-xs mt-8 mb-2 text-center w-full">
          &copy; {new Date().getFullYear()} Meowgenda. Designed for Raspberry Pi & Desktop.
        </footer>
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
