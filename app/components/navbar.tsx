type NavbarProps = {
  onOpenMenu: () => void;
  onOpenAbout: () => void;
  onOpenLeaderboard: () => void;
  connectionMode: 'online' | 'offline';
  onToggleConnection: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

export function Navbar({ onOpenMenu, onOpenAbout, onOpenLeaderboard, connectionMode, onToggleConnection, theme, onToggleTheme }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-black bg-[#f7f3ea]">
      <div className="border-b-2 border-black bg-[#c8b8e8] px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-[#1a1a1a]">
        Offline learning for every classroom & every connection
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMenu}
            className="flex h-11 w-11 items-center justify-center rounded-[18px] border-2 border-black bg-white shadow-[4px_4px_0_#1a1a1a] transition duration-200 hover:-translate-y-0.5 hover:scale-105"
            aria-label="Open menu"
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-[2px] w-5 bg-[#1a1a1a]" />
              <span className="h-[2px] w-5 bg-[#1a1a1a]" />
              <span className="h-[2px] w-5 bg-[#1a1a1a]" />
            </span>
          </button>
          <div className="flex items-center gap-3 rounded-[18px] border-2 border-black bg-white px-3 py-2 shadow-[4px_4px_0_#1a1a1a] transition duration-200 hover:-translate-y-0.5 hover:scale-[1.01]">
            <div className="flex h-9 w-9 items-center justify-center rounded-[14px] border-2 border-[#b5d000] bg-[#f5f0e8] text-lg font-black text-[#1a1a1a]">
              L
            </div>
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-[#1a1a1a]">LārConnect</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#5a4f3b]">AI tutor platform</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            className="rounded-full border-2 border-black bg-white px-3 py-2 text-sm font-black uppercase tracking-[0.2em] shadow-[3px_3px_0_#1a1a1a] transition duration-200 hover:-translate-y-0.5"
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
          <button
            onClick={onToggleConnection}
            className={`rounded-full border-2 border-black px-3 py-2 text-sm font-black uppercase tracking-[0.2em] shadow-[3px_3px_0_#1a1a1a] transition duration-200 hover:-translate-y-0.5 ${connectionMode === 'online' ? 'bg-[#b5d000]' : 'bg-[#f7f0a0]'}`}
          >
            {connectionMode === 'online' ? '● Online' : '⬇ Offline'}
          </button>
          <nav className="hidden items-center gap-3 md:flex">
            <button
              onClick={onOpenAbout}
              className="rounded-full border-2 border-black bg-white px-4 py-2 font-semibold text-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] transition duration-200 hover:-translate-y-0.5"
            >
              About
            </button>
            <button
              onClick={onOpenLeaderboard}
              className="rounded-full border-2 border-black bg-[#b5d000] px-4 py-2 font-semibold text-[#1a1a1a] shadow-[4px_4px_0_#1a1a1a] transition duration-200 hover:-translate-y-0.5"
            >
              Leaderboard
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
