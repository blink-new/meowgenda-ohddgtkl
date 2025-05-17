import React from 'react';

const moduleInfo = {
  'time-weather': {
    title: 'Time & Weather',
    icon: '🌤️',
    desc: 'Current time and local weather at a glance.',
    bg: 'bg-gradient-to-br from-blue-200 via-emerald-100 to-white dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-900',
  },
  calendar: {
    title: 'Calendar',
    icon: '📅',
    desc: 'See your upcoming events and plans.',
    bg: 'bg-gradient-to-br from-pink-200 via-orange-100 to-white dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-900',
  },
  todo: {
    title: 'To-Do',
    icon: '✅',
    desc: 'Track your daily tasks and goals.',
    bg: 'bg-gradient-to-br from-emerald-200 via-blue-100 to-white dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-900',
  },
  notes: {
    title: 'Notes',
    icon: '📝',
    desc: 'Jot down quick notes and ideas.',
    bg: 'bg-gradient-to-br from-yellow-100 via-pink-100 to-white dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-900',
  },
  news: {
    title: 'News',
    icon: '📰',
    desc: 'Stay updated with the latest headlines.',
    bg: 'bg-gradient-to-br from-blue-100 via-pink-100 to-white dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-900',
  },
  settings: {
    title: 'Settings',
    icon: '⚙️',
    desc: 'Customize your dashboard experience.',
    bg: 'bg-gradient-to-br from-zinc-100 via-blue-100 to-white dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-900',
  },
};

type ModuleType = keyof typeof moduleInfo;

const DashboardPreview: React.FC<{ type: ModuleType }> = ({ type }) => {
  const info = moduleInfo[type];
  return (
    <div
      className={`rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center min-h-[180px] transition hover:scale-105 hover:shadow-2xl cursor-pointer ${info.bg} animate-fade-in`}
      style={{ animationDelay: `${Math.random() * 0.2 + 0.1}s` }}
    >
      <div className="text-4xl md:text-5xl mb-2 drop-shadow">{info.icon}</div>
      <div className="text-lg md:text-xl font-bold text-zinc-700 dark:text-zinc-100 mb-1 text-center">{info.title}</div>
      <div className="text-zinc-500 dark:text-zinc-300 text-sm text-center max-w-xs">{info.desc}</div>
    </div>
  );
};

export default DashboardPreview;
