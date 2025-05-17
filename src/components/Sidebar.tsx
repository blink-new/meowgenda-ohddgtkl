import React from 'react';

const navItems = [
  { key: 'time-weather', icon: '🌤️', label: 'Time & Weather' },
  { key: 'calendar', icon: '📅', label: 'Calendar' },
  { key: 'todo', icon: '✅', label: 'To-Do' },
  { key: 'notes', icon: '📝', label: 'Notes' },
  { key: 'news', icon: '📰', label: 'News' },
  { key: 'settings', icon: '⚙️', label: 'Settings' },
];

const Sidebar: React.FC<{ selected?: string; onSelect?: (key: string) => void }> = ({ selected, onSelect }) => {
  return (
    <nav
      className="fixed top-6 left-6 z-20 flex flex-col gap-2 rounded-3xl bg-white/70 dark:bg-zinc-900/70 shadow-2xl backdrop-blur-xl border border-white/40 dark:border-zinc-800/60 p-3 md:p-4 w-[70px] md:w-24 items-center transition-all animate-fade-in"
      style={{ minHeight: '420px' }}
      aria-label="Main navigation"
    >
      {navItems.map((item) => (
        <button
          key={item.key}
          className={`flex flex-col items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl font-bold text-2xl md:text-3xl transition-all
            ${selected === item.key ? 'bg-blue-200/80 dark:bg-zinc-700/80 scale-105 shadow-lg' : 'hover:bg-blue-100/60 dark:hover:bg-zinc-800/60'}
            text-zinc-700 dark:text-zinc-100`}
          aria-label={item.label}
          onClick={() => onSelect?.(item.key)}
        >
          <span>{item.icon}</span>
          <span className="hidden md:block text-xs font-medium mt-1 text-zinc-500 dark:text-zinc-300">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;
