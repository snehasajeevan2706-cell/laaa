type HowItWorksProps = {
  onOpenModal: (title: string, body: string, accent: string) => void;
};

const steps = [
  {
    title: 'Install the extension',
    description: 'Add LārConnect in seconds and bring AI tutoring into any classroom window.',
    accent: 'bg-[#b5d000]',
  },
  {
    title: 'Open any teaching tool',
    description: 'Use it across notes, videos, documents, and every learning surface you already use.',
    accent: 'bg-[#c8b8e8]',
  },
  {
    title: 'Ask anything',
    description: 'Turn questions into explanations, quizzes, and offline-ready study packs.',
    accent: 'bg-[#f5c9a0]',
  },
];

export function HowItWorks({ onOpenModal }: HowItWorksProps) {
  return (
    <section className="border-b-2 border-black bg-[#f7f3ea] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#3b5bdb]">How it works</p>
        <h2 className="mt-3 font-playfair text-4xl font-black leading-tight text-[#1a1a1a] sm:text-5xl">
          Three steps. Zero excuses.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#4a4338]">
          From teacher upload to student learning — LārConnect handles everything in between.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <button
              key={step.title}
              onClick={() => onOpenModal(step.title, step.description, '#ffffff')}
              className={`rounded-none border-2 border-black p-8 text-left shadow-[4px_4px_0_#1a1a1a] ${step.accent}`}
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-white text-2xl font-black text-[#1a1a1a]">
                {index + 1}
              </div>
              <h3 className="text-2xl font-black text-[#1a1a1a]">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-[#4a4338]">{step.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
