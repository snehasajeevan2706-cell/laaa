const platforms = [
  { name: 'YouTube', icon: '▶' },
  { name: 'WhatsApp', icon: '💬' },
  { name: 'Zoom', icon: '🖥' },
  { name: 'Google Meet', icon: '📹' },
  { name: 'Khan Academy', icon: '📚' },
  { name: 'Notion', icon: '📝' },
  { name: 'Google Drive', icon: '☁' },
  { name: 'Microsoft Teams', icon: '🤝' },
  { name: 'Quizlet', icon: '🧠' },
  { name: 'Duolingo', icon: '🗣' },
  { name: 'Gmail', icon: '✉' },
  { name: 'Slack', icon: '🔔' },
  { name: 'Discord', icon: '🎮' },
  { name: 'Instagram', icon: '📸' },
  { name: 'TikTok', icon: '🎵' },
  { name: 'Threads', icon: '🧵' },
];

export function PlatformMarquee() {
  return (
    <section className="border-y-2 border-black bg-[#f7f3ea] py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-none border-2 border-black bg-white shadow-[4px_4px_0_#1a1a1a]">
          <div className="flex items-center gap-3 whitespace-nowrap border-b-2 border-black bg-[#f5f0e8] px-4 py-3 text-[11px] font-black uppercase tracking-[0.35em] text-[#1a1a1a]">
            <span className="rounded-full border-2 border-black bg-[#b5d000] px-2 py-1">LIVE</span>
            Works across every classroom tool
          </div>
          <div className="overflow-hidden">
            <div className="marquee flex w-max items-center gap-4 px-4 py-4">
              {[...platforms, ...platforms].map((platform, index) => (
                <div key={`${platform.name}-${index}`} className="flex items-center gap-2 rounded-full border-2 border-black bg-[#f7f0a0] px-3 py-2 font-semibold text-[#1a1a1a] shadow-[2px_2px_0_#1a1a1a]">
                  <span className="text-base">{platform.icon}</span>
                  <span>{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
