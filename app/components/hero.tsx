import { useEffect, useState } from 'react';

type HeroProps = {
  onOpenModal: (title: string, body: string, accent: string) => void;
};

const rotatingLines = ['Rural Education', 'Rural Students', 'Rural Teachers'];

export function Hero({ onOpenModal }: HeroProps) {
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveLine((prev) => (prev + 1) % rotatingLines.length);
    }, 1400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden border-b-2 border-black bg-[#f5f0e8] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-[#b5d000]/30 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-[#3b5bdb]/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
        <div className="mb-6 flex flex-col gap-3">
          <div className="inline-flex self-center rounded-full border-2 border-black bg-white px-3 py-2 text-[10px] font-black uppercase tracking-[0.35em] shadow-[4px_4px_0_#1a1a1a]">
            <span className="mr-2">✨</span> AI-powered education for every classroom
          </div>
          <div className="inline-flex self-center rounded-full border-2 border-black bg-[#f7f0a0] px-3 py-2 text-[10px] font-black uppercase tracking-[0.35em] shadow-[4px_4px_0_#1a1a1a]">
            <span className="mr-2">🌿</span> Offline-first learning that keeps going
          </div>
        </div>

        <h1 className="max-w-5xl font-playfair text-5xl font-black leading-[0.95] text-[#1a1a1a] sm:text-6xl lg:text-7xl">
          <span className="text-[#3b5bdb]">AI</span> learning built for
          <span className="mt-4 block text-[#1a1a1a]">rural classrooms</span>
        </h1>

        <div className="mt-6 flex min-h-12 items-center justify-center overflow-hidden rounded-full border-2 border-black bg-white/90 px-5 py-3 shadow-[4px_4px_0_#1a1a1a]">
          <span className="mr-3 text-sm font-black uppercase tracking-[0.3em] text-[#1a1a1a]">Empowering</span>
          <span className="inline-block min-w-[220px] text-lg font-black text-[#3b5bdb] animate-fade-up">
            {rotatingLines[activeLine]}
          </span>
        </div>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#4a4338] sm:text-xl">
          Teachers upload lessons, LārConnect builds offline packs, and students learn with AI support even on weak connections.
        </p>

        <div className="mt-8 grid w-full max-w-4xl gap-4 md:grid-cols-3">
          {[
            { title: 'Video Lessons', desc: 'Curriculum-ready lessons', accent: 'bg-[#b5d000]' },
            { title: 'Offline Packs', desc: 'Works with low signal', accent: 'bg-[#c8b8e8]' },
            { title: 'AI Tutor', desc: 'Ask, learn, revise', accent: 'bg-[#f5c9a0]' },
          ].map((card, index) => (
            <button
              key={card.title}
              onClick={() => onOpenModal(card.title, card.desc, '#ffffff')}
              className={`rounded-[24px] border-2 border-black p-5 text-left shadow-[4px_4px_0_#1a1a1a] transition duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0_#1a1a1a] ${card.accent} ${index === 1 ? 'animate-float' : ''}`}
            >
              <div className="mb-3 inline-flex rounded-full border-2 border-black bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em]">
                {index === 0 ? '📹' : index === 1 ? '📦' : '🤖'}
              </div>
              <h3 className="font-playfair text-xl font-black text-[#1a1a1a]">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#4a4338]">{card.desc}</p>
            </button>
          ))}
        </div>

        <div className="mt-10 flex w-full max-w-xl flex-col gap-3">
          <button
            onClick={() => onOpenModal('Start learning', 'Welcome to LārConnect — create your first classroom, upload materials, and let AI guide every student through offline-ready lessons.', '#b5d000')}
            className="w-full rounded-none border-2 border-black bg-[#b5d000] px-6 py-4 text-lg font-black uppercase tracking-[0.2em] shadow-[4px_4px_0_#1a1a1a] transition hover:-translate-y-0.5"
          >
            Sign Up For Free
          </button>
          <button
            onClick={() => onOpenModal('How it works', 'See how teachers upload content, LārConnect builds offline packs, and students learn even on weak connections.', '#ffffff')}
            className="w-full rounded-none border-2 border-black bg-white px-6 py-4 text-lg font-black uppercase tracking-[0.2em] shadow-[4px_4px_0_#1a1a1a] transition hover:-translate-y-0.5"
          >
            See how it works ↓
          </button>
        </div>
      </div>
    </section>
  );
}
